if (
  localStorage.getItem("page") === null ||
  Number(localStorage.getItem("page")) < 1
) {
  localStorage.setItem("page", "1");
}

// export const increment = (num) => {
//   pageNumber++;
//   console.log(pageNumber);
// };

// export const decrement = () => {
//   pageNumber--;
// };

export const fetchCards = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      window.location.replace(`cards.html`);
      const filtered = data.cards.filter((item) => item.imageUrl !== undefined);
      let cards = filtered;

      localStorage.setItem("data", JSON.stringify(cards));
    });
};
