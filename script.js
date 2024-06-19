const textAreaEl = document.querySelector(".textarea");
const charatersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  if (textAreaEl.value.includes("<script>")) {
    alert("You cannot use that");
    textAreaEl.value = textAreaEl.value.replace("<script>", "");
  }

  let numberOfWord = textAreaEl.value.split(" ").length;
  if (textAreaEl.value.length === 0) {
    numberOfWord = 0;
  }
  const numberOfCharaters = textAreaEl.value.length;
  const twitterCharatersLeft = 280 - numberOfCharaters;
  const facebookCharatersLeft = 2200 - numberOfCharaters;

  if (twitterCharatersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharatersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  wordsNumberEl.textContent = numberOfWord;
  charatersNumberEl.textContent = numberOfCharaters;
  twitterNumberEl.textContent = twitterCharatersLeft;
  facebookNumberEl.textContent = facebookCharatersLeft;
};

textAreaEl.addEventListener("input", inputHandler);
