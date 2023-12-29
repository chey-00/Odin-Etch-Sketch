let color = "";
let size = "";

// Add event listener to wait for page to fully load before running JS
document.addEventListener("DOMContentLoaded", () => {
  // add eventlistener to register user size Input into JS variable
  let userInput = document.querySelector(".selectionInput");

  userInput.addEventListener("input", () => {
    size = userInput.value;
  });

  // add eventlistener to color selection buttons

  let buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (true) {
        case btn.classList.contains("blackBtn"):
          setColor("black");
          break;
        case btn.classList.contains("randomBtn"):
          setColor("random");
          break;
      }
    });
  });

  function setColor(colorChoice) {
    color = colorChoice;
  }

  // EventListener to generate actions following START button click
  let startBtn = document.querySelector(".startBtn");
  startBtn.addEventListener("click", startGame);

  function startGame() {
    let message = document.querySelector(".message");
    if (size < 16 || size > 100 || size == "") {
      message.innerHTML = "Please enter a number between 16 and 100";
    } else if (color == "") {
      message.innerHTML = "Please select a color";
    } else {
      message.innerHTML = "Ready to play!";
      createBoard(size);

      let numDivs = size * size;
      for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", function colorDiv(color) {
          if (color === "black") {
            this.style.backgroundColor = "black";
          } else {
            this.style.backgroundColor = `hsl(${
              Math.random() * 300
            }, 100%, 50%)`;
          }
        });
        board.insertAdjacentElement("beforeend", div);
        // This function makes the grid and user design visible in the DOM
      }
    }
  }

  // Function to generate game board based on user size Input
  function createBoard(size) {
    let board = document.querySelector("#board");
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
  }
});
