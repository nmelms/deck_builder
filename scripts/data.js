if (
  localStorage.getItem("page") === null ||
  Number(localStorage.getItem("page")) < 1
) {
  localStorage.setItem("page", "1");
}

export const fetchCards = (url) => {
  const advancedSearch = document.querySelector(".advancedSearchBtn");
  advancedSearch.innerHtml = `
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      window.location.replace(`cards.html`);
      localStorage.setItem("data", JSON.stringify(data.data));
    })
    .catch(console.log((err) => console.log(err)));
};
