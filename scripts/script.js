let cardsList = document.querySelector(".cardsList");
let switchBtn = document.querySelector(".switchBtn");
let select = document.querySelector(".select");
let cardTypeCheckBox = document.querySelector(".cardTypeCheckBox");
let advancedSearchBtn = document.querySelector(".advancedSearchBtn");
let cardType = [...document.querySelectorAll(".cardType")];
let cards = null;
let pageNumber = localStorage.getItem("page");
let queryString = "q=c:rgbwu";
import { fetchCards } from "/scripts/data.js";
console.log(`https://api.scryfall.com/cards/search?${queryString}`);
const showCards = () => {
  window.addEventListener("load", () => {});
  for (let i = 0; i < cards.length; i++) {
    let img = document.createElement("img");
    img.src = cards[i].imageUrl;
    cardsList.appendChild(img);
  }
};

advancedSearchBtn.addEventListener("click", () => {
  console.log(`https://api.scryfall.com/cards/search?${queryString}&page=1`);
  fetchCards(`https://api.scryfall.com/cards/search?${queryString}&page=1`);
});

cardTypeCheckBox.addEventListener("change", (e) => {
  let string = "q=";
  let checkedValues = [];
  cardType.map((item, index) => {
    if (item.checked) {
      checkedValues.push(item.value);
    }
  });
  checkedValues.map((value, index) => {
    if (index !== checkedValues.length - 1) {
      string += value + " OR ";
    } else if (index === checkedValues.length - 1) {
      string += value;
    }
    queryString = string;
  });
});

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  localStorage.setItem("queryString", e.target.value);
  localStorage.setItem("page", "1");
  fetchCards(
    `https://api.scryfall.com/cards/search?&order=cmc&q=` +
      e.target.value +
      "&page=1"
  );
});

// fetchCards("https://api.magicthegathering.io/v1/cards?colors=R|W&cmc=5");
