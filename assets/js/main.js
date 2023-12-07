import particles_options from "./particles_options.js";
import skills from "../../data/skills.js";
import projects from "../../data/projects.js";
import experiences from "../../data/experiences.js";

const navBarList = [
  "About",
  "Projects",
  "Skills",
  "Experiences",
  "Contact"
]

function generateNavBar(navBarList, containerSelector) {
  const listContainer = document.querySelector(containerSelector);

  if (!listContainer) {
    console.error("Container not found");
    return;
  }

  navBarList.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');

    const link = document.createElement('a');
    link.href = `#${item.toLowerCase()}`;
    link.classList.add('nav-item-link');
    link.textContent = item;

    listItem.appendChild(link);
    listContainer.appendChild(listItem);
  });
}

// Menu bar
function initializeMenuBar() {
  const menuBar = document.querySelector(".wrap-icon-bars");
  const listNav = document.querySelector(".wrap-nav-mb");

  if (!menuBar || !listNav) {
    console.error("Menu bar or list nav not found");
    return;
  }

  menuBar.addEventListener("click", function (e) {
    this.classList.toggle("is-open");
    listNav.classList.toggle("is-open");
  });
}

tsParticles.load("tsparticles", particles_options);

// Type animation
const typeAnimation = new Typed(".type-animation", {
  strings: ["Front End Developer", "Let's get in touch"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

const typeAnimationContact = new Typed(".type-animation-contact", {
  strings: ["Let's get in touch"],
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

// Project cards
function generateProjectCards() {
  const cardContainer = document.getElementById('card-container'); // Assuming you have a container element with the ID 'card-container'

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.classList.add('card', `card_${index + 1}`, 'overlay');

    if (project.image.length > 0) {
      console.log(project.image);
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
    // viewDetails.textContent = 'Details';

    const linkDetails = document.createElement('a');
    linkDetails.setAttribute('href', project.link);
    linkDetails.setAttribute('target', '_blank');
    linkDetails.textContent = 'Details';


    content.appendChild(title);
    content.appendChild(text);

    contentDesc.appendChild(technologies);
    contentDesc.appendChild(role);

    description.appendChild(contentDesc);
    description.appendChild(viewDetails);

    viewDetails.append(linkDetails);

    card.appendChild(date);
    card.appendChild(content);
    card.appendChild(description);

    cardContainer.appendChild(card);
  });
}

// Function to format date
function formatDate(dateString) {
  const [month, year] = dateString.split('/'); // Splitting the date string
  const monthIndex = parseInt(month, 10) - 1; // Adjusting month index (JavaScript months are zero-based)

  const options = { month: 'long', year: 'numeric' };
  const formattedDate = new Date(year, monthIndex).toLocaleDateString('en-US', options);
  return formattedDate;
}

// Function to convert task IDs to their respective names
function convertTaskIdToName(taskId) {
  switch (taskId) {
    case 'fe':
      return 'Front End';
    case 'be':
      return 'Back End';
    case 'auto':
      return 'Automation Test';
    default:
      return taskId; // Return the same ID if no match found
  }
}

// Function to generate HTML content from the data
function generateExperiences(experiences) {
  const expContent = document.querySelector('.exp-content');
  const timeline = document.createElement('ul');
  timeline.classList.add('timeline');

  experiences.forEach(experience => {
    const timelineEvent = document.createElement('li');
    timelineEvent.classList.add('timeline-event');

    const timelineEventIcon = document.createElement('label');
    timelineEventIcon.classList.add('timeline-event-icon');
    timelineEvent.appendChild(timelineEventIcon);

    const timelineEventCopy = document.createElement('div');
    timelineEventCopy.classList.add('timeline-event-copy');

    const startDate = formatDate(experience.start);
    const endDate = experience.end === 'Present' ? 'Present' : formatDate(experience.end);
    const dateRange = document.createElement('p');
    dateRange.classList.add('timeline-event-thumbnail');
    dateRange.textContent = `${startDate} - ${endDate}`;
    timelineEventCopy.appendChild(dateRange);

    const companyName = document.createElement('h3');
    companyName.textContent = experience.company;
    timelineEventCopy.appendChild(companyName);

    experience.task.forEach(task => {
      const taskName = convertTaskIdToName(task.id[0]);
      const taskDescription = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = `${taskName}:`;
      taskDescription.appendChild(strong);
      taskDescription.innerHTML += `<br>${task.desc}`;
      timelineEventCopy.appendChild(taskDescription);
    });

    timelineEvent.appendChild(timelineEventCopy);
    timeline.appendChild(timelineEvent);
  });

  expContent.appendChild(timeline);
}

document.addEventListener('DOMContentLoaded', function () {
  const formInputs = document.querySelectorAll('.form-input');

  formInputs.forEach(function (input) {
    input.addEventListener('keyup', handleInputChange);
    input.addEventListener('paste', handleInputChange);
    input.addEventListener('cut', handleInputChange);
    input.addEventListener('focusout', handleInputChange);
  });
});

function handleInputChange(event) {
  const parent = event.target.closest('.form-line');
  const inputValue = event.target.value.trim();
  const required = event.target.hasAttribute('required');

  if (inputValue.length > 0) {
    parent.querySelector('label').classList.add('top');
    parent.classList.remove('error');
    parent.classList.add('success');
  } else {
    parent.querySelector('label').classList.remove('top');
    parent.classList.remove('success');
    if (required) {
      parent.classList.add('error');
    }
  }
}


initializeMenuBar();

generateNavBar(navBarList, '.list-nav');

// Call the function for both marquee containers
appendSkillsToMarquee(skills, "skills-container-first");
appendSkillsToMarquee(skills, "skills-container-second");

generateProjectCards();

// Call the function with your experiences data
generateExperiences(experiences);