
const today = new Date();
const thisYear = today.getFullYear();

// Create footer using the DOM 
const footer = document.querySelector("footer");
const copyright = document.createElement("div");
copyright.classList.add("footer-content");
copyright.innerHTML = `&copy; Mohamed El Aynouni.  All Rights Reserved ${thisYear}`;


footer.appendChild(copyright);

// Create skills section using the DOM 
const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "PHP", level: 70 },
  { name: "WordPress", level: 70 },
  { name: "Photoshop", level: 90 },
];

// Select the skills section from HTML
const skillsSection = document.getElementById("skillsSection");
skills.forEach((skill) => {
  const skillContainer = document.createElement("div");
  skillContainer.classList.add("py-1");
  const skillHeader = document.createElement("div");
  skillHeader.classList.add("d-flex");
  skillHeader.innerHTML = `${skill.name}<span>${skill.level}%</span>`;

  // Create the progress container
  const progressContainer = document.createElement("div");
  progressContainer.classList.add("progress", "my-1");

  // Create the progress bar with level
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.style.width = `${skill.level}%`;
  progressBar.setAttribute("aria-valuemax", "100");

  progressContainer.appendChild(progressBar);
  skillContainer.appendChild(skillHeader);
  skillContainer.appendChild(progressContainer);
  skillsSection.appendChild(skillContainer);
});
