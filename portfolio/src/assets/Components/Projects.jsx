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
    img:"./portfolio.png",
  },
  {
    id: 2,
    title: "Travel Booking Platform",
    description:
      "A responsive travel website with destination filtering, reviews, and booking links.",
    url: "https://travelingsafe.netlify.app/",
    repo: "https://github.com/lam-lamshi/Travel-safe",
    icon: "fas fa-globe",
    img:"./travelWeb (1).png",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "An online store with product listings, cart functionality, and modern UI design.",
    url: "#",
    repo: "#",
    icon: "fas fa-shopping-cart",
    img:"./Ecommerce.png",
  },
  {
    id: 4,
    title: "Business Landing Page",
    description:
      "A conversion-focused landing page built to increase engagement and generate leads.",
    url: "https://lam-lamshi.github.io/Cafe_Flour/",
    repo: "https://github.com/lam-lamshi/Cafe_Flour",
    icon: "fas fa-coffee",
    img:"./Cafe.png",
  },
  {
    id: 5,
    title: "API Dashboard",
    description:
      "A data dashboard that consumes REST APIs and presents insights in a clean interface.",
    url: "#",
    repo: "#",
    icon: "fas fa-database",
    img:"./APi.png",
  },
  {
    id: 6,
    title: "Responsive Web App",
    description:
      "A mobile-first web application optimized for speed, accessibility, and usability.",
    url: "#",
    repo: "#",
    icon: "fas fa-mobile-alt",
    img:"./Responsive.png",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up" data-aos-duration="1000">
      <div className="projects-container">

        <div className="projects-header" data-aos="fade-left" data-aos-duration="1000">
          <h2>My Projects</h2>
          <p>Here are some of the projects I&apos;ve worked on.</p>
        </div>

        <div className="projects-content" data-aos="fade-up" data-aos-duration="1000">
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
            {projectList.map((project, index) => (
            <article key={project.id} className="project-card" data-aos="fade-down" data-aos-duration="1000" data-aos-delay={index * 100}>

              <div className="project-card-top"  data-aos="fade-right" data-aos-duration="1000" data-aos-delay={index * 100}>
                <span className="project-card-badge">
                  Project {project.id}
                </span>
                    <div className="project-image">
                    <img src={project.img} alt={project.title} />
                  </div>
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