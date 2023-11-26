function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createDivs(rows, cols) {
  const gridDivEl = document.querySelector(".grid");
  const gridWidth = gridDivEl.offsetWidth;
  const gridHeight = gridDivEl.offsetHeight;
  const cellWidth = gridWidth / cols;
  const cellHeight = gridHeight / rows;

  const getRandomColor = () =>
    `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;

  let isDragging = false;
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";
    gridDivEl.appendChild(rowDiv);

    for (let j = 0; j < cols; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("grid-item");
      colDiv.style.width = `${cellWidth}px`;
      colDiv.style.height = `${cellHeight}px`;

      // Add your event listeners and other styles here

      colDiv.addEventListener("mousedown", (event) => {
        event.preventDefault();
        isDragging = true;
        colDiv.style.backgroundColor = getRandomColor();
      });

      document.addEventListener("mouseup", () => {
        isDragging = false;
      });

      colDiv.addEventListener("mouseover", () => {
        if (isDragging) {
          colDiv.style.backgroundColor = getRandomColor();
        }
      });

      colDiv.addEventListener("mouseout", () => {
        if (isDragging) {
          colDiv.style.backgroundColor = `black`;
          colDiv.style.transition = "background-color 1s ease";
        }
      });

      rowDiv.appendChild(colDiv);
    }
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "white";
    item.style.transition = "background-color 1s ease";
  });
}

function changeGridSize() {
  const newSize = Number(prompt("Enter new size"));
  const gridDivEl = document.querySelector(".grid");

  if (newSize > 100) {
    alert("Please enter a number less than 100");
  } else if (newSize < 1) {
    alert("Please enter a number greater than 0");
  } else {
    gridDivEl.innerHTML = "";

    createDivs(newSize, newSize);
  }
}

const overlay = document.querySelector(".overlay");
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function () {
  overlay.style.display = "none";
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearGrid);

const changeSizeBtn = document.querySelector(".resize");
changeSizeBtn.addEventListener("click", changeGridSize);

createDivs(10, 10);
