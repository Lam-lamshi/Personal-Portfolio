import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer">
           <div className="footer-social">
              <a
                href="https://github.com/Lam-lamshi"
                target="_blank"
                rel="https://github.com/Lam-lamshi"
              >
                <i className="fab fa-flip fa-github"></i>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab 2x fa-fade fa-x-twitter"></i>
              </a>
               <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-shake fa-phone"></i>
              </a>

              <a href="mailto:emmanuelwisdomolamide@gmail.com">
                <i className="fas fa-bounce fa-envelope"></i>
              </a>
            </div>
        
            <div className="footer-container">
                <p>&copy; Lammy 2026. All rights reserved.</p>
            </div>
        </footer>
    )
}