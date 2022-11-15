let idsArr = JSON.parse(localStorage.getItem("ids"));
let deck = document.querySelector(".deck");
let cards = [];

idsArr.map((id, index) => {
  fetch("https://api.scryfall.com/cards/" + id)
    .then((res) => res.json())
    .then((data) => {
      cards.push(data);
      if (index === idsArr.length - 1) {
        showCards();
      }
    });
});

const showCards = () => {
  console.log(cards);
  cards.map((card) => {
    let img = document.createElement("img");
    img.src = card.image_uris.normal;
    deck.appendChild(img);
  });
};
