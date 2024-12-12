// DOM Manipulation
const button = document.querySelector(".colour-button");
const body = document.querySelector("body");
const colorDisplay = document.querySelector(".current-colour");
// defining global variable
let hexcol;

// generating a hex colour
const generateColor = function () {
  const colour = Math.floor(Math.random() * 16777215);
  return `#${colour.toString(16).padStart(6, "0")}`;
};

// applies colour to background and gives hex number
const applyCol = function (hexcol) {
  body.style.backgroundColor = hexcol;
  colorDisplay.textContent = hexcol;
};
// event listener
button.addEventListener("click", function () {
  hexcol = generateColor();
  applyCol(hexcol);
  console.log(hexcol);
});
