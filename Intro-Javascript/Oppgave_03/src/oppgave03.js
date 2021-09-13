import "./styles.css";

const wordTxt = document.getElementById("word");
const letterTxt = document.getElementById("letter");
const wrongsTxt = document.getElementById("wrongs");

let currentWord,
  charPos,
  wrongs = 0;

const words = [
  "Asgard",
  "Alfheim",
  "Jotunheim",
  "Midgard",
  "Niflheim",
  "Nidavellir"
];

const start = (e) => {
  updateNextWord();
  window.addEventListener("keyup", updateKeyPress);
  e.target.disabled = true;
};
const startBtn = document
  .getElementsByTagName("button")[0]
  .addEventListener("click", start);

const updateUi = () => {
  let splitWord = splitAt(charPos)(currentWord);

  wordTxt.innerHTML = `<span class="green">${splitWord[0]}</span><span>${splitWord[1]}</span>`;

  wrongsTxt.innerHTML = `Antall feil: ${wrongs}`;
};
const updateNextWord = () => {
  //get random word from words array
  let word = words.splice(Math.floor(Math.random() * words.length), 1);
  currentWord = word[0];
  charPos = 0;
  updateUi();
};

const splitAt = (index) => (x) => [x.slice(0, index), x.slice(index)];

const updateKeyPress = ({ key }) => {
  //which key should user press? and is this the same as current pos in current word?

  if (key.length > 1) return;
  else letterTxt.innerHTML = key;

  if (key === currentWord[charPos]) {
    charPos++;

    if (charPos >= currentWord.length) {
      if (words.length === 0) {
        wordTxt.innerHTML = "No more words";
        window.removeEventListener("keyup", updateKeyPress);
        return;
      }
      updateNextWord();
    }
  } else wrongs++;
  updateUi();
};

