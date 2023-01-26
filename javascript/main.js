"use strict";

var btnMore = document.querySelectorAll("img");
btnMore.forEach(function (element) {
  return element.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (ev.target.parentNode.parentNode.classList.length === 1) {
      ev.target.setAttribute("src", "/assets/expand_less_.svg");
      ev.target.classList.add('opacity_img');
      ev.target.parentNode.parentNode.classList.add('expand');
      ev.target.parentNode.childNodes[1].classList.add('h3_color');
      ev.target.parentNode.parentNode.childNodes[3].classList.remove('text');
    } else {
      ev.target.setAttribute("src", "/assets/expand_more.svg");
      ev.target.classList.remove('opacity_img');
      ev.target.parentNode.parentNode.classList.remove('expand');
      ev.target.parentNode.childNodes[1].classList.remove('h3_color');
      ev.target.parentNode.parentNode.childNodes[3].classList.add('text');
    }
  });
});