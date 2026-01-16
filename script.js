let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Auto slideshow
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);

// Show first slide
showSlide(slideIndex);
