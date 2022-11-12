let cardsList = document.querySelector(".cardsList");
let switchBtn = document.querySelector(".switchBtn");
let select = document.querySelector(".select");
let cards = null;
import { fetchCards } from "/data.js";

const showCards = () => {
  window.addEventListener("load", () => {});
  for (let i = 0; i < cards.length; i++) {
    let img = document.createElement("img");
    img.src = cards[i].imageUrl;
    cardsList.appendChild(img);
  }
};

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  fetchCards(
    `https://api.magicthegathering.io/v1/cards?colors=${e.target.value}`
  );
  // window.location.replace("cards.html");
});

// fetchCards("https://api.magicthegathering.io/v1/cards?colors=R|W&cmc=5");
