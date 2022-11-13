import { fetchCards } from "/data.js";

let cards = JSON.parse(localStorage.getItem("data"));
let queryString = localStorage.getItem("queryString");
let cardsList = document.querySelector(".cardsList");
let homeBtn = document.querySelector(".homeBtn");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let currentPageNumber = document.querySelector(".currentPageNumber");

console.log(cards);
homeBtn.addEventListener("click", () => {
  window.location.replace(`index.html`);
});

//increment page number
nextBtn.addEventListener("click", () => {
  let pageString = localStorage.getItem("page");
  let pageNumber = Number(pageString);
  pageNumber++;
  localStorage.setItem("page", pageNumber.toString());
  fetchCards(
    `https://api.scryfall.com/cards/search?&order=cmc&q=` +
      queryString +
      "&page=" +
      pageNumber
  );
});
//decrement page number
prevBtn.addEventListener("click", () => {
  let pageString = localStorage.getItem("page");
  let pageNumber = Number(pageString);
  pageNumber--;
  localStorage.setItem("page", pageNumber.toString());
  console.log(pageNumber);
  fetchCards(
    `https://api.scryfall.com/cards/search?&order=cmc&q=` +
      queryString +
      "&page=" +
      pageNumber
  );
});

for (let i = 0; i < cards.length; i++) {
  let img = document.createElement("img");
  if (cards[i].image_uris !== undefined) {
    img.src = cards[i].image_uris.normal;
  }

  cardsList.appendChild(img);
}

currentPageNumber.innerText = localStorage.getItem("page");
