let cardsList = document.querySelector(".cardsList");
let switchBtn = document.querySelector(".switchBtn");
let select = document.querySelector(".select");
let cards = null;
let pageNumber = localStorage.getItem("page");
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
  localStorage.setItem("searchColor", e.target.value);
  localStorage.setItem("page", "1");
  fetchCards(
    `https://api.magicthegathering.io/v1/cards?colors=${e.target.value}&page=1`
  );
  // window.location.replace("cards.html");
});

// fetchCards("https://api.magicthegathering.io/v1/cards?colors=R|W&cmc=5");
