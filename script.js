"use strict";

const btnContainerElement = document.querySelector(".btn_container");

btnContainerElement.addEventListener("click", (event) => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  alert(`Clicked: ${event.target.firstChild.data}`);;
});
