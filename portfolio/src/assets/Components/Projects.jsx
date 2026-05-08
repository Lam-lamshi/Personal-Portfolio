import './Projects.css'

const projectList = [
  {
    id: 1,
    title: 'Cafe Flour',
    description: 'A bakery website with a responsive menu, modern UI, and live ordering preview.',
    url: 'https://lam-lamshi.github.io/Cafe_Flour/',
    repo: 'https://github.com/Lam-lamshi/Cafe_Flour',
    img: '/cafe-flour.mp4',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'A React + Vite portfolio showcasing projects, skills, and contact links.',
    url: 'https://lam-lamshi.github.io/portfolio/',
    repo: 'https://github.com/Lam-lamshi/portfolio',
    img: '/icons8-github-logo.gif',
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'A task tracker app with CRUD functionality, filters, and local storage support.',
    url: 'https://lam-lamshi.github.io/task-manager/',
    repo: 'https://github.com/Lam-lamshi/task-manager',
    img: '/icons8-phone-100.png',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with API forecasts, search, and location-based updates.',
    url: 'https://lam-lamshi.github.io/weather-dashboard/',
    repo: 'https://github.com/Lam-lamshi/weather-dashboard',
    img: '/arrow.png',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'A recipe discovery app with ingredient search, filtering, and saved favorites.',
    url: 'https://lam-lamshi.github.io/recipe-finder/',
    repo: 'https://github.com/Lam-lamshi/recipe-finder',
    img: '/icons8-github-logo.gif',
  },
  {
    id: 6,
    title: 'Travel Safe',
    description: 'A travel safety website with destination guidance, alerts, and trip planning resources.',
    url: 'https://lam-lamshi.github.io/Travel-safe/',
    repo: 'https://github.com/Lam-lamshi/Travel-safe',
    img: '/icons8-phone-100.png',
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>Here are some of the projects I&apos;ve worked on.</p>
        </div>

        <div className="projects-content">
          <div className="projects-text">
            <h3>Check out my work</h3>
            <p>
              Explore my GitHub repository to see more projects, code samples, and
              contributions.
            </p>
          </div>

          <div className="projects-visual">
            <div className="projects-right-content">
              <img
                src="/icons8-github-logo.gif"
                alt="GitHub Logo Animation"
                className="projects-gif"
              />
              <a
                className="projects-github-btn"
                href="https://github.com/Lam-lamshi"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {projectList.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-top">
                <span className="project-card-badge">Project {project.id}</span>
                <h3>{project.title}</h3>
              </div>
              {project.img && (
                project.img.endsWith('.mp4') ? (
                  <video
                    src={project.img}
                    alt={`${project.title} demo`}
                    className="project-media"
                    controls
                    muted
                    loop
                  />
                ) : (
                  <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className="project-media"
                  />
                )
              )}
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  className="project-btn primary"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="project-btn secondary"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  
                  Repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}