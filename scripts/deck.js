let deckArr = JSON.parse(localStorage.getItem("deckArr"));
let statsCardName = document.querySelector(".statsCardName");
let allOverlays = [...document.querySelectorAll(".overLay")];
let deck = document.querySelector(".deck");
let cards = [];

const cardClick = (e) => {
  // location.reload();
  allOverlays.map((item) => {
    item.style.display = "none";
  });

  let overlay = e.target.parentNode.querySelector(".overlay");
  overlay.style.display === "none"
    ? (overlay.style.display = "flex")
    : (overlay.style.display = "none");
};

const removeClick = (e, index) => {
  console.log(deckArr);
  e.stopPropagation();
  deckArr.splice(index, 1);
  localStorage.setItem("deckArr", JSON.stringify(deckArr));
  location.reload();
};

for (let i in deckArr) {
  let img = document.createElement("img");
  let div = document.createElement("div");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let overlay = document.createElement("div");
  img.src = deckArr[i].image_uris.normal;
  div.classList.add("cardImg");
  div.classList.add("cardHover");
  div.style.position = "relative";

  btn.classList.add("btn", "btn-primary", "removeBtn");
  overlay.classList.add("overlay");
  btn.innerText = "Remove Card";
  overlay.appendChild(btn);
  overlay.style.display = "none";
  li.innerText = deckArr[i].name;

  div.addEventListener("click", (e) => cardClick(e));
  btn.addEventListener("click", (e) => removeClick(e, i));

  statsCardName.appendChild(li);
  div.appendChild(img);
  div.appendChild(overlay);

  deck.appendChild(div);
}
