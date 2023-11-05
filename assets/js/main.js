import particles_options from "./particles_options.js";
import skills from "../../data/skills.js";

console.log(skills);
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
  loop: true,
});

// Slider marquee
// Function to generate a skill card element
function generateSkillCard(skill) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <div class="skill-card">
        <div class="wrap-skill-card">
          <img src="${skill.icon}" alt="${skill.title}">
          <p>${skill.title}</p>
          <span>${skill.description}</span>
        </div>
      </div>
  `;
  return listItem;
}

// Function to append skill cards to the marquee container
function appendSkillsToMarquee(skills, marqueeId) {
  const marqueeContainer = document.getElementById(marqueeId);
  const marqueeContent = marqueeContainer.querySelector(".marquee__content");

  skills.forEach((skill) => {
      const skillCard = generateSkillCard(skill);
      marqueeContent.appendChild(skillCard);

      // Clone the generated skill card and append it to the aria-hidden list
      const ariaHiddenSkillCard = document.createElement("li");
      ariaHiddenSkillCard.innerHTML = skillCard.innerHTML;
      const ariaHiddenList = marqueeContainer.querySelector(".marquee__content[aria-hidden='true']");
      ariaHiddenList.appendChild(ariaHiddenSkillCard);
  });
}

// Call the function for both marquee containers
appendSkillsToMarquee(skills, "skills-container-first");
appendSkillsToMarquee(skills, "skills-container-second");

// Slider skills 
const boxes = document.querySelectorAll("#box")
const ani = new Animation(boxes, { opacity: 0 }, { easing: "ease-out" })
