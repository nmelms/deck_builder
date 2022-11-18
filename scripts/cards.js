import { fetchCards } from "/scripts/data.js";

let cards = JSON.parse(localStorage.getItem("data"));
let pageNumber = localStorage.getItem("page");
let queryString = localStorage.getItem("queryString");
let cardsList = document.querySelector(".cardsList");
let cardImages = [...document.querySelectorAll("img")];
let homeBtn = document.querySelector(".homeBtn");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let currentPageNumber = document.querySelector(".currentPageNumber");

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

const handleClick = (e, card) => {
  let img = document.createElement("img");
  img.src = "../assets/check.svg";
  img.classList.add("checkImg");
  e.target.parentNode.appendChild(img);

  let deckArr = JSON.parse(localStorage.getItem("deckArr"));
  deckArr.push(card);
  e.target.classList.add("animateIn");
  localStorage.setItem("deckArr", JSON.stringify(deckArr));

  setTimeout(() => {
    img.remove();
  }, 1000);
};

// maps over cards images and displays

for (let i = 0; i < cards.length; i++) {
  let img = document.createElement("img");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");

  if (cards[i].image_uris !== undefined) {
    img.src = cards[i].image_uris.normal;
  }
  img.classList.add("cardHover");
  img.id = cards[i].id;
  img.addEventListener("click", (e) => handleClick(e, cards[i]));

  imgDiv.appendChild(img);
  cardsList.appendChild(imgDiv);
}

console.log(cardImages);
currentPageNumber.innerText = localStorage.getItem("page");
