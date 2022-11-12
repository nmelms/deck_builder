let cards = JSON.parse(localStorage.getItem("data"));

let cardsList = document.querySelector(".cardsList");

for (let i = 0; i < cards.length; i++) {
  let img = document.createElement("img");
  img.src = cards[i].imageUrl;
  cardsList.appendChild(img);
}
