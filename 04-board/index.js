const board = document.querySelector("#board");
const SQUARE_NUMBERS = 440;
const colors = ["#ffff00", "#ffffff"];

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  let color = changeColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 4px ${color}, 0 0 4px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 4px #000`;
}

function changeColor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
