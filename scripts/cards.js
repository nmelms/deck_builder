import { fetchCards } from "/scripts/data.js";

let switchBtn = document.querySelector(".switchBtn");
let deckLink = document.querySelector(".deckLink");
let searchLink = document.querySelector(".searchLink");
let select = document.querySelector(".select");
let cardTypeCheckBox = document.querySelector(".cardTypeCheckBox");
let advancedSearchBtn = document.querySelector(".advancedSearchBtn");
let cardType = [...document.querySelectorAll(".cardType")];
let colorType = [...document.querySelectorAll(".colorType")];
let formatRadio = [...document.querySelectorAll(".formatRadio")];
let queryString = "q=";

let cards = JSON.parse(localStorage.getItem("data"));
let pageNumber = localStorage.getItem("page");
// let queryString = localStorage.getItem("queryString");
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

const flipClick = (img, card, e) => {
  e.stopPropagation();
  img.src === card.card_faces[0].image_uris.normal
    ? (img.src = card.card_faces[1].image_uris.normal)
    : (img.src = card.card_faces[0].image_uris.normal);
};

// maps over cards images and displays
for (let i = 0; i < cards.length; i++) {
  let img = document.createElement("img");
  let imgDiv = document.createElement("div");
  let btnDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");

  if (cards[i].image_uris !== undefined) {
    img.src = cards[i].image_uris.normal;
  } else {
    //cards with two faces get a flip button
    let svg = document.createElement("btn");
    img.src = cards[i].card_faces[0].image_uris.normal;
    svg.innerText = "Flip";
    svg.classList.add("flipBtn", "btn", "btn-dark");
    svg.addEventListener("click", (e) => flipClick(img, cards[i], e));
    btnDiv.addEventListener("click", (e) => handleClick(e, cards[i]));
    btnDiv.appendChild(svg);
    btnDiv.classList.add("btnDiv");
    imgDiv.appendChild(btnDiv);
    imgDiv.classList.add("cardHover");
  }
  img.classList.add("cardHover");
  img.id = cards[i].id;
  img.addEventListener("click", (e) => handleClick(e, cards[i]));

  imgDiv.appendChild(img);
  cardsList.appendChild(imgDiv);
}

console.log(cardImages);
currentPageNumber.innerText = localStorage.getItem("page");

//offcanvas scripts
advancedSearchBtn.addEventListener("click", () => {
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

  formatRadio.map((item) => {
    if (item.checked) {
      queryString += item.value;
    }
  });
  let colorString = " c:";
  colorType.map((item) => {
    if (item.checked) {
      colorString += item.value;
    }
  });
  queryString += colorString;

  console.log(queryString);

  fetchCards(
    `https://api.scryfall.com/cards/search?order=color&${queryString}&page=1`
  );
});
