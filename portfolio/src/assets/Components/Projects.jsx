import './Projects.css'

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on.</p>
        </div>

        <div className="projects-content">
          <div className="projects-text">
            <h3>Check out my work</h3>
            <p>Explore my GitHub repository to see more projects, code samples, and contributions.</p>
          </div>

          <div className="projects-visual">
            <div className="projects-right-content">
              <img
                src="/icons8-github-logo.gif"
                alt="GitHub Logo Animation"
                className="projects-gif"
              />
              <button
                className="projects-github-btn"
                onClick={() => { window.location.href = "https://github.com/Lam-lamshi"; }}
              >
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}