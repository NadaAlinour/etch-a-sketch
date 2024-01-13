const colorSelectorContainer = document.querySelector(".color-selector");
const colorSelector = document.querySelector("#color-selector");
colorSelectorContainer.style.backgroundColor = colorSelector.value;

colorSelector.addEventListener("change", () => {
  colorSelectorContainer.style.backgroundColor = colorSelector.value;
});

const drawGrid = (pixels, canvas) => {
  const size = 100 / pixels;
  for (let i = 0; i < pixels; i++) {
    for (let j = 0; j < pixels; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.style.cssText = `box-sizing: border-box; width: ${size}%;
       padding-top: ${size}%; flex-grow: 1`;
      canvas.appendChild(cell);
    }
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = colorSelector.value;
      console.log("click");
    });
  });

  const clearButton = document.querySelector("#clear-btn");
  clearButton.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });

  const psychedelicButton = document.querySelector("#psychedelic-btn");
  psychedelicButton.addEventListener("click", () => {
    //random color values
    const colors = [
      "#4287f5",
      "#bf226c",
      "#8ff584",
      "#294526",
      "#46f0e7",
      "#f2d163",
      "#ebb502",
      "#f7b2ef",
      "#93f5e6",
    ];

    cells.forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      });
    });
  });

  const eraserButton = document.querySelector("#eraser-btn");
eraserButton.addEventListener("click", () => {
  
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor =
        '#ffffff';
    });
  });
});

};

const canvas = document.querySelector(".canvas-container");
drawGrid(16, canvas);

const smallButton = document.querySelector("#small-btn");
smallButton.addEventListener("click", () => {
  const canvas = document.querySelector(".canvas-container");
  while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
  drawGrid(16, canvas);
});

const mediumButton = document.querySelector("#med-btn");
mediumButton.addEventListener("click", () => {
  const canvas = document.querySelector(".canvas-container");
  while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
  drawGrid(32, canvas);
});

const largeButton = document.querySelector("#large-btn");
largeButton.addEventListener("click", () => {
  const canvas = document.querySelector(".canvas-container");
  while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
  drawGrid(64, canvas);
});

const monochromeButton = document.querySelector("#monochrome-btn");
monochromeButton.addEventListener("click", () => {
  const colorSelectorContainer = document.querySelector(".color-selector");
  const rgbValues = colorSelectorContainer.style.backgroundColor.match(/\d+/g);

  // converting each value to hexadecimal
  const hexValues = rgbValues.map((value) => {
    const hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });

  // combining the hexadecimals to create a string
  const hexColor = `#${hexValues.join("")}`;

  const colorSelect = document.querySelector("#color-selector");
  colorSelect.value = hexColor;

  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor =
        colorSelect.value;
    });
  });

});

const cells = document.querySelectorAll(".cell");

