const gridDivEl = document.querySelector(".grid");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createDivs(rows, cols) {
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";
    rowDiv.style.flexDirection = "row";
    rowDiv.style.justifyContent = "center";
    rowDiv.style.alignItems = "center";
    rowDiv.style.width = "100%";
    gridDivEl.appendChild(rowDiv);

    for (let j = 0; j < cols; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("grid-item");
      // Add your event listeners and other styles here
      colDiv.addEventListener("mouseover", () => {
        colDiv.style.backgroundColor = `rgb(${getRandomInt(
          255
        )}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
        colDiv.style.transition = "background-color 0.1s ease";
      });

      colDiv.addEventListener("mouseout", () => {
        colDiv.style.backgroundColor = "black";
        colDiv.style.transition = "background-color 5s ease";
      });

      rowDiv.appendChild(colDiv);

      // colDiv.style.backgroundColor = "black";
    }
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "black";
    item.style.transition = "background-color 1s ease";
  });
}

function changeGridSize() {
  const newSize = prompt("Enter new size");
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.remove();
  });
  if (newSize > 100) {
    alert("Please enter a number less than 100");
  } else if (newSize < 1) {
    alert("Please enter a number greater than 0");
  } else {
    createDivs(newSize, newSize);
  }
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearGrid);

const changeSizeBtn = document.querySelector(".resize");
changeSizeBtn.addEventListener("click", changeGridSize);

createDivs(15, 15);
