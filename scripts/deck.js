let deckArr = JSON.parse(localStorage.getItem("deckArr"));
let deck = document.querySelector(".deck");
let cards = [];

for (let i in deckArr) {
  let img = document.createElement("img");
  img.src = deckArr[i].image_uris.normal;
  deck.appendChild(img);
}

const showCards = () => {
  console.log(cards);
  cards.map((card) => {});
};
