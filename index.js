const colorSelectorContainer = document.querySelector(".color-selector");
const colorSelector = document.querySelector("#color-selector");
colorSelectorContainer.style.backgroundColor = colorSelector.value;

colorSelector.addEventListener("change", () => {
  colorSelectorContainer.style.backgroundColor = colorSelector.value;
});
