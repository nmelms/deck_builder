import { fetchCards } from "/data.js";

let cards = JSON.parse(localStorage.getItem("data"));
let searchColor = localStorage.getItem("searchColor");
let cardsList = document.querySelector(".cardsList");
let homeBtn = document.querySelector(".homeBtn");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");

homeBtn.addEventListener("click", () => {
  window.location.replace(`index.html`);
});

nextBtn.addEventListener("click", () => {
  console.log("click");
  let pageString = localStorage.getItem("page");
  let pageNumber = Number(pageString);
  pageNumber++;
  localStorage.setItem("page", pageNumber.toString());
  console.log(pageNumber);
  fetchCards(
    `https://api.magicthegathering.io/v1/cards?colors=${searchColor}&page=${pageNumber}`
  );
});

prevBtn.addEventListener("click", () => {
  console.log("click");
  let pageString = localStorage.getItem("page");
  let pageNumber = Number(pageString);
  pageNumber--;
  localStorage.setItem("page", pageNumber.toString());
  console.log(pageNumber);
  fetchCards(
    `https://api.magicthegathering.io/v1/cards?colors=${searchColor}&page=${pageNumber}`
  );
});

for (let i = 0; i < cards.length; i++) {
  let img = document.createElement("img");
  img.src = cards[i].imageUrl;
  cardsList.appendChild(img);
}
