'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const bodyElement = document.body;
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  function changeColor() {
    const newColor = getRandomHexColor();
    bodyElement.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
  }

  changeColorButton.addEventListener('click', changeColor);