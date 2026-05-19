import "./Projects.css";

const projectList = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React.js, focused on performance and clean UI design.",
    url: "https://your-demo-link.com",
    repo: "https://github.com/yourusername/portfolio",
    icon: "fas fa-laptop-code",
  },
  {
    id: 2,
    title: "Travel Booking Platform",
    description:
      "A responsive travel website with destination filtering, reviews, and booking links.",
    url: "https://lam-lamshi.github.io/Travel-safe/travel.html",
    repo: "https://github.com/lam-lamshi/Travel-safe",
    icon: "fas fa-globe",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "An online store with product listings, cart functionality, and modern UI design.",
    url: "#",
    repo: "#",
    icon: "fas fa-shopping-cart",
  },
  {
    id: 4,
    title: "Business Landing Page",
    description:
      "A conversion-focused landing page built to increase engagement and generate leads.",
    url: "#",
    repo: "#",
    icon: "fas fa-chart-line",
  },
  {
    id: 5,
    title: "API Dashboard",
    description:
      "A data dashboard that consumes REST APIs and presents insights in a clean interface.",
    url: "#",
    repo: "#",
    icon: "fas fa-database",
  },
  {
    id: 6,
    title: "Responsive Web App",
    description:
      "A mobile-first web application optimized for speed, accessibility, and usability.",
    url: "#",
    repo: "#",
    icon: "fas fa-mobile-alt",
  },
];

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
              Explore my GitHub repository to see more projects, code samples, and contributions.
            </p>
          </div>

          <div className="projects-visual">
            <div className="projects-right-content">
              <img
                src="./icons8-github-logo.gif"
                alt="GitHub Logo Animation"
                className="projects-gif"
              />

              <a
                className="projects-github-btn"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projectList.map((project) => (
            <article key={project.id} className="project-card">

              <div className="project-card-top">
                <span className="project-card-badge">
                  Project {project.id}
                </span>

                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>

                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <div className="project-links">
                <a
                  className="project-btn primary"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo →
                </a>

                <a
                  className="project-btn secondary"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo →
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}