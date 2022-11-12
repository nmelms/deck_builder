export const fetchCards = (url) => {
  console.log("called");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      window.location.replace(`cards.html`);
      const filtered = data.cards.filter((item) => item.imageUrl !== undefined);
      let cards = filtered;
      console.log(cards);
      localStorage.setItem("data", JSON.stringify(cards));
    });
};
