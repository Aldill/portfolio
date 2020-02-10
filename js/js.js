document.addEventListener('DOMContentLoaded', () => {
  writeHeader();
}, false);

const text = [
  "<div class=\"header__text>\"",
  "\"Hello, Mikołaj here.\"",
  "... // I need to find a job.",
  "</div>"
];
const headerElement = document.querySelector(".header__text");
let position = 0, i = 0;
const writeHeader = () => {
  if (i < text.length) {
    if (position < text[i].length) {
      headerElement.innerHTML += text[i].charAt(position);
      position++;
      setTimeout(writeHeader, 150);
    }
    else {
      position = 0;
      i++;
      headerElement.innerHTML += "<br>";
      setTimeout(writeHeader, 150);
    }
  }
};


const aboutClick = () => {
  document.querySelector(".about").classList.toggle("about--show");
}

const pagesClick = () => {
  document.querySelector('.pages').classList.toggle('pages--show');
}

[document.querySelector('.box__button--center'), document.querySelector('.pages__close')].forEach(button => {
  button.addEventListener("click", pagesClick);
});

[document.querySelector('.box__button--top'), document.querySelector('.about__close')].forEach(button => {
  button.addEventListener("click", aboutClick);
});