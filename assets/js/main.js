import particles_options from "./particles_options.js";

// Menu bar
let menuBar = document.querySelector(".wrap-icon-bars"),
  listNav = document.querySelector(".wrap-nav-mb");

menuBar.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  listNav.classList.toggle("is-open");
});

tsParticles.load("tsparticles", particles_options);
