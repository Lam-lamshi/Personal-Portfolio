import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar-wrapper" id="home">
      <div className="navbar-container">
        <a className="navbar-logo" href="#home">
          Wisdom
        </a>

        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#stats">Stats</a>
          <a href="#projects">Projects</a>``
        </nav>

        <a className="navbar-cta" href="https://wa.me/2349085306102" target="_blank" rel="noopener noreferrer">
             <img
              className="navbar-contact-image fas fa-bounce"
              src="./contact.png"
              alt="Contact"
            />
        </a>
      </div>
    </header>
  )
}