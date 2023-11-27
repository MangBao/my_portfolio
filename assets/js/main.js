import particles_options from "./particles_options.js";
import skills from "../../data/skills.js";
import projects from "../../data/projects.js";

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

// Project cards
function generateProjectCards() {
  const cardContainer = document.getElementById('card-container'); // Assuming you have a container element with the ID 'card-container'

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.classList.add('card', `card_${index + 1}`, 'overlay');

    if (index === 0 && project.image.length > 0) {
      card.style.backgroundImage = `url(${project.image[0]})`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'left';
    }

    const date = document.createElement('div');
    date.classList.add('date');
    date.innerHTML = `<span class="start-day">${project.start_date}</span> - <span class="end-day">${project.end_date || 'Present'}</span>`;

    const content = document.createElement('div');
    content.classList.add('content');

    const title = document.createElement('div');
    title.classList.add('title');
    // title.textContent = project.title;

    const text = document.createElement('div');
    text.classList.add('text', 'text-color-primary');
    text.textContent = project.description;

    const description = document.createElement('div');
    description.classList.add('description', 'text-color-primary');

    const contentDesc = document.createElement('div');
    contentDesc.classList.add('content-desc');

    const technologies = document.createElement('div');
    technologies.classList.add('technologies');
    technologies.textContent = `Technologies: ${project.technologies}`;

    const role = document.createElement('div');
    role.classList.add('role');
    role.textContent = `Role: ${project.role}`;

    const viewDetails = document.createElement('div');
    viewDetails.classList.add('view', 'series_lacasa', 'detail');
    viewDetails.textContent = 'Details';

    content.appendChild(title);
    content.appendChild(text);

    contentDesc.appendChild(technologies);
    contentDesc.appendChild(role);

    description.appendChild(contentDesc);
    description.appendChild(viewDetails);

    card.appendChild(date);
    card.appendChild(content);
    card.appendChild(description);

    cardContainer.appendChild(card);
  });
}

generateProjectCards();
