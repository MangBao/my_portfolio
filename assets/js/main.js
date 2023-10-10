import particles_options from "./particles_options.js";

// Menu bar
let menuBar = document.querySelector(".wrap-icon-bars"),
  listNav = document.querySelector(".wrap-nav-mb");

menuBar.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  listNav.classList.toggle("is-open");
});

tsParticles.load("tsparticles", particles_options);

// Type animation
const typeAnimation = new Typed(".type-animation", {
  strings: ["Front End Developer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true
})

// Slider skills 
const boxes = document.querySelectorAll("#box")
const ani = new Animation(boxes, { opacity: 0 }, { easing: "ease-out" })
