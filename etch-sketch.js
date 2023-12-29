let color = "";
let size = "";

// Event listener to wait for page to fully load before running JS
document.addEventListener("DOMContentLoaded", () => {
  // Eventlistener to register user size Input into JS variable
  let userInput = document.querySelector(".selectionInput");

  userInput.addEventListener("input", () => {
    size = userInput.value;
  });

  // Eventlistener for color selection buttons

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
        case btn.classList.contains("eraseBtn"):
          setColor("darkslategray");
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

      // This function makes the user design visible in the DOM
      let numDivs = size * size;
      for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => {
          if (color == "black") {
            div.style.backgroundColor = "black";
          } else if (color == "random") {
            div.style.backgroundColor = `hsl(${
              Math.random() * 300
            }, 100%, 50%)`;
          } else if (color == "darkslategray") {
            div.style.backgroundColor = "darkslategray";
          } else {
            console.log("ERROR");
            return "ERROR";
          }
        });
        board.insertAdjacentElement("beforeend", div);
      }
    }
  }

  // Function to generate game board div dimensions based on user size Input
  function createBoard(size) {
    let board = document.querySelector("#board");
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
  }
});
