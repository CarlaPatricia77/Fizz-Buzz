import fizzBuzz from "./fizzbuzz.js";

const input = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const number = Number.parseInt(input.value);
  div.innerHTML = `<p>${fizzBuzz(number)}</p>`;
});
