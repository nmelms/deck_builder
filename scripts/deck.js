let deckArr = JSON.parse(localStorage.getItem("deckArr"));
let statsCardName = document.querySelector(".statsCardName");
let allOverlays = [...document.querySelectorAll(".overLay")];
let deck = document.querySelector(".deck");
let cards = [];

const cardClick = (e) => {
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

const flipClick = (img, card, e) => {
  e.stopPropagation();
  img.src === card.card_faces[0].image_uris.normal
    ? (img.src = card.card_faces[1].image_uris.normal)
    : (img.src = card.card_faces[0].image_uris.normal);
};

for (let i in deckArr) {
  let img = document.createElement("img");
  let div = document.createElement("div");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let overlay = document.createElement("div");
  let imgDiv = document.createElement("div");
  let btnDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");

  if (deckArr[i].image_uris !== undefined) {
    img.src = deckArr[i].image_uris.normal;
  } else {
    //cards with two faces get a flip button
    let svg = document.createElement("btn");
    img.src = deckArr[i].card_faces[0].image_uris.normal;
    svg.innerText = "Flip";
    svg.classList.add("flipBtn", "btn", "btn-dark");
    svg.addEventListener("click", (e) => flipClick(img, deckArr[i], e));
    btnDiv.appendChild(svg);
    btnDiv.classList.add("btnDiv");
    div.appendChild(btnDiv);
    div.classList.add("cardHover");
  }
  div.classList.add("cardImg", "cardHover");
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
