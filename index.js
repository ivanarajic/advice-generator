const btn = document.querySelector(".dice");
const quote = document.querySelector("h1");
const number = document.querySelector(".number");

const getAdvice = async function () {
  const data = await fetch(`https://api.adviceslip.com/advice`);

  const dataAdvice = await data.json();
  console.log(dataAdvice);

  quote.textContent = "\u201c" + dataAdvice.slip.advice + "\u201d";
  number.textContent = "#" + dataAdvice.slip.id;
};
window.addEventListener("load", function () {
  getAdvice();
});

btn.addEventListener("click", function () {
  getAdvice();
});
