// navbar
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// video
const button = document.querySelector("button");
const close = document.querySelector(".fa-window-close");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");

button.addEventListener('click', () => {
  trailer.style.visibility = "visible";
  trailer.style.opacity = 1;
});

close.addEventListener('click', () => {
  trailer.style.visibility = "hidden";
  trailer.style.opacity = 0;

  video.pause();
  video.currentTime = 0;
});

// blog
const wrapper = document.querySelector('.blog-wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})

// payment page
function validateForm() {
  return  alert("  Payment successfully Done");
 }
