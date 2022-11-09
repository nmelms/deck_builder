let cardsList = document.querySelector(".cardsList");
let cards = null;

const fetchCards = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const filtered = data.cards.filter((item) => item.imageUrl !== undefined);
      console.log(data);
      console.log(filtered);
      data.cards;
      cards = filtered;

      showCards();
    });
};

const showCards = () => {
  for (let i = 0; i < cards.length; i++) {
    let img = document.createElement("img");
    img.src = cards[i].imageUrl;
    cardsList.appendChild(img);
  }
};

fetchCards("https://api.magicthegathering.io/v1/cards?colors=R|W&cmc=5");
