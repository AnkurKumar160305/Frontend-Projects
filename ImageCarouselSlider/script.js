let left = document.querySelector('.left-arrow');
let right = document.querySelector('.right-arrow');
let car = document.querySelector('.carousel');
let card = document.querySelectorAll('.card');

let offset = 0;

function updateCarousel() {
// car.scrollWidth → total width of all cards inside the carousel.
// car.clientWidth → visible width of the carousel container (what fits on screen).
  let maxOffset = car.scrollWidth - car.clientWidth;

  if (offset > 0) offset = 0;
  if (offset < -maxOffset) offset = -maxOffset-15;

  car.style.transform = `translateX(${offset}px)`;
}

left.addEventListener('click', () => {
  offset += 305;  // go right (show earlier cards)
  updateCarousel();
});

right.addEventListener('click', () => {
  offset -= 305;  // go left (show later cards)
  updateCarousel();
});


window.onload = function () {
  updateCarousel(); // ensures initial alignment
};

