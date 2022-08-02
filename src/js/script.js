const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const cards = document.querySelectorAll(".card");

let currentCard = 0;

const nextCard = () => {
  currentCard++;
  if (currentCard > cards.length - 1) currentCard = 0;
  changeCard(currentCard);
};

const prevCard = () => {
  currentCard--;
  if (currentCard < 0) currentCard = cards.length - 1;
  changeCard(currentCard);
};

const changeCard = (card) => {
  removePrevCard();
  cards[card].classList.add("selected-card");
};

const removePrevCard = () => {
  const selectedCard = document.querySelector(".selected-card");
  selectedCard.classList.remove("selected-card");
};

btnNext.addEventListener("click", nextCard);
btnPrev.addEventListener("click", prevCard);