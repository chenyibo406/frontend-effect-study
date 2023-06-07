const cards = document.querySelectorAll(".card");
const card1 = document.querySelector(".card-1");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActive();
    card.classList.add("active");
  });
});

function removeActive() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
