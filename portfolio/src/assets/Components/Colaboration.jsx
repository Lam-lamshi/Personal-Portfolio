import './colaboration.css'
export default function Collaboration() {

  const submitForm = (event) => {
    event.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="collab">
      <h2>Lets work together!</h2>

      <section id="contact">
        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <h2>Contact Information</h2>

            <span>
              We’re here to help you plan the perfect adventure.
              Reach out to us through any of these channels.
            </span>

            <div className="info-block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone Icon"
              />

              <div>
                <strong>Phone</strong>
                <span>+234 902 561 8500</span>
                <span>Mon–Fri 9AM–6PM WAT</span>
              </div>
            </div>

            <div className="info-block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561188.png"
                alt="Email Icon"
              />

              <div>
                <strong>Email</strong>
                <span>emmanuelwisdomolamide@gmail.com</span>
                <span>We’ll respond within 24 hours</span>
              </div>
            </div>

            <div className="info-block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Office Icon"
              />

              <div>
                <strong>Office</strong>
                <span>Abuja, Nigeria</span>
                <span>Not available in person for consultations</span>
              </div>
            </div>

            <div className="info-block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3771/3771214.png"
                alt="Language Icon"
              />

              <div>
                <strong>Languages</strong>
                <span>English, French, Swahili</span>
                <span>Multilingual support available</span>
              </div>
            </div>

            <div className="footer-social">
              <p>Connect with us</p>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>

              <a href="mailto:info@travelsafe.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form">

            <h2>Send us a Message</h2>

            <p>
              Tell us about your dream destination and
              we’ll help make it a reality.
            </p>

            <form id="clickable" onSubmit={submitForm}>

              <div>
                <label htmlFor="name">Full Name *</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address *</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your travel plans..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="send-btn"
              >
                <i className="fas fa-paper-plane"></i>
                {" "}Send Message
              </button>

            </form>

            <p className="privacy-note">
              By submitting this form, you agree to our
              privacy policy and terms of service.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}