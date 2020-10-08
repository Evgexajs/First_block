
var slideIndex = 1;
function autoScroll() {  
  intervalId = window.setInterval(function () { showSlides(slideIndex += 1); }, 3000);
}
function onLoad() {
  showSlides(slideIndex);
  autoScroll();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(intervalId);
  autoScroll();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}  

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__slide");
  var dots = document.getElementsByClassName("slideshow__dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function modals() {
  document.getElementById("modal-img").style.display = "block";
  document.getElementById("modal-img__content").src = document.getElementsByClassName("image")[slideIndex-1].src;
}