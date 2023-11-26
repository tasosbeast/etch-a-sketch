const gridDivEl = document.querySelector(".grid");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createDivs(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("grid-item");
    divEl.style.backgroundColor = "rgb(255, 255, 255)";
    divEl.addEventListener("mouseover", function () {
      divEl.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(
        255
      )}, ${getRandomInt(255)})`;

      divEl.style.transition = "background-color 0.1s ease";
    });

    divEl.addEventListener("mouseleave", function () {
      divEl.style.backgroundColor = "rgb(255, 255, 255)";
      divEl.style.transition = "background-color 5s ease";
    });

    gridDivEl.appendChild(divEl);
  }
}

createDivs(10, 10);
