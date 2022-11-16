let deckArr = JSON.parse(localStorage.getItem("deckArr"));
let deck = document.querySelector(".deck");
let cards = [];

const cardClick = (e) => {
  let overlay = e.target.parentNode.querySelector(".overlay");
  overlay.style.display === "none"
    ? (overlay.style.display = "block")
    : (overlay.style.display = "none");
};

const cancelClick = (e) => {
  e.target.parentNode.style.display = "none";
};

for (let i in deckArr) {
  let img = document.createElement("img");
  let div = document.createElement("div");
  let btn = document.createElement("button");
  let close = document.createElement("button");
  let overlay = document.createElement("div");
  img.src = deckArr[i].image_uris.normal;
  div.classList.add("cardImg");
  div.classList.add("cardHover");
  div.style.position = "relative";

  btn.classList.add("btn", "btn-primary", "removeBtn");
  close.classList.add("btn", "btn-primary", "closeBtn");
  overlay.classList.add("overlay");
  btn.innerText = "Remove Card";
  close.innerText = "Cancel";
  overlay.appendChild(btn);
  overlay.appendChild(close);
  overlay.style.display = "none";

  div.addEventListener("click", (e) => cardClick(e));
  // btn.addEventListener("click", (e) => removeClick(e));
  // close.addEventListener("click", (e) => cancelClick(e));

  div.appendChild(img);
  div.appendChild(overlay);

  deck.appendChild(div);
}
