// Add event listener to wait for page to fully load before running JS
document.addEventListener("DOMContentLoaded", function () {
  // add eventlistener to register user size Input into JS variable
  let userInput = document.querySelector(".selectionInput");
  userInput.addEventListener("input", function sizeInput() {
    let size = userInput.value;

    // Call function that takes user input and generates board dimensions
    createBoard(size);

    // Run another function to make each individual grid visible in the DOM
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
      let div = document.createElement("div");
      div.style.backgroundColor = "yellow";
      board.insertAdjacentElement("beforeend", div);
    }

    // add eventlistener to color selection buttons
    let blackBtn = document.querySelector(".blackBtn");
    let randomBtn = document.querySelector(".randomBtn");

    blackBtn.addEventListener("click", () => {});
  });
});

// Function to generate game board based on user size Input
function createBoard(size) {
  let board = document.querySelector("#board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
}
