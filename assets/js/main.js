// Menu bar
let menuBar = document.querySelector(".wrap-icon-bars"),
  listNav = document.querySelector(".wrap-nav-mb");

menuBar.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  listNav.classList.toggle("is-open");
});
