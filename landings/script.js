const projects = [
  {
    title: "DMV Site",
    category: "Web Design",
    image: "assets/thumb-dmv.png",
    href: "https://dmv.com",
    action: "View Site"
  },
  {
    title: "Senior Assistance - Benefits Landing",
    category: "Landing Page Design",
    image: "assets/thumb-seniors.png",
    href: "https://www.figma.com/proto/Qaj1aT6yrKEk0wMN9ucxQ4/Senior-Benefits-Landing?node-id=1-2&t=8Foo7VAE6Rkub9B2-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1",
    action: "View Design"
  },
  {
    title: "Senior Assistance - Programs Landing",
    category: "Landing Page Design",
    image: "assets/thumb-seniors-programs.png",
    href: "https://www.figma.com/proto/xDlos8ilg9AZzVHBSOMONU/Seniors-Programs-Landing?node-id=1-3&t=H4dCgVeXHHFYcwBF-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1",
    action: "View Design"
  },
  {
    title: "Health Insurance Landing",
    category: "Landing Page / Funnel Design",
    image: "assets/thumb-health-insurance.png",
    href: "https://www.figma.com/proto/PbRQ8h450ZUSfiWF7Xf1GI/Health-Insurance?node-id=1-2187&p=f&t=nTvLbpGjX7zjYklG-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&disable-default-keyboard-nav=1&hide-ui=1",
    action: "View Prototype"
  },
  {
    title: "Sidehustles Landing",
    category: "Landing Page / Funnel Design",
    image: "assets/thumb-sidehustles.png",
    href: "https://www.figma.com/proto/RGq9KWFQegYiQfkFMvQISI/Sidehustles-Landing?node-id=1-756&t=ScgMf2MHguGfCLdq-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&disable-default-keyboard-nav=1&hide-ui=1",
    action: "View Prototype"
  },
  {
    title: "Everyday Consumers",
    category: "Web Design / HTML / CSS",
    image: "assets/thumb-everyday-consumers.png",
    href: "https://everydayconsumers.org/",
    action: "Visit Site"
  },
  {
    title: "Baltimore.com",
    category: "Web Design / HTML / CSS",
    image: "assets/thumb-baltimore.png",
    href: "https://www.baltimore.com",
    action: "Visit Site"
  },
  {
    title: "This Los Angeles",
    category: "Web Design / HTML / CSS",
    image: "assets/thumb-angeles.png",
    href: "https://thislosangeles.com",
    action: "Visit Site"
  },
  {
    title: "Hey Las Vegas",
    category: "Web Design / HTML / CSS",
    image: "assets/thumb-vegas.png",
    href: "https://heylasvegas.com",
    action: "View Site"
  }
];

const projectGrid = document.querySelector("#projectGrid");
const year = document.querySelector("#year");

const createProjectCard = (project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  article.innerHTML = `
    <a class="project-image-link" href="${project.href}" target="_blank" rel="noopener noreferrer" aria-label="${project.action}: ${project.title}">
      <img class="project-image" src="${project.image}" alt="Preview of ${project.title}" loading="lazy">
    </a>
    <div class="project-meta">
      <div>
        <h2 class="project-title">${project.title}</h2>
        <p class="project-category">${project.category}</p>
      </div>
      <a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer">${project.action} <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
    </div>
  `;

  return article;
};

projects.forEach((project) => {
  projectGrid.appendChild(createProjectCard(project));
});

year.textContent = new Date().getFullYear();

if (window.lucide) {
  lucide.createIcons();
}
