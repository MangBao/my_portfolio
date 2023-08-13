// Menu bar
let menuBar = document.querySelector(".wrap-icon-bars"),
  listNav = document.querySelector(".wrap-nav-mb");

menuBar.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  listNav.classList.toggle("is-open");
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("./particles/particles.js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});
