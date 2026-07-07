import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './colaboration.css';

export default function Collaboration() {
  // Create a reference to the form element
  const formRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();

    // Replace these strings with your actual EmailJS credentials
    const serviceID = 'service_va1gc4h';
    const templateID = 'template_z93tkwc';
    const publicKey = 'DUt8v1dze01ZM4_rG';

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Message sent successfully!');
          window.location.reload(); // Restarts the page and wipes the form clean
        },
        (error) => {
  // Change the generic message to this temporary alert
  alert('EmailJS Error Details: ' + (error.text || JSON.stringify(error)));
  console.error('EmailJS Error:', error);
}
      
      );
  };

  return (
    <div className="collab" data-aos="fade-up" data-aos-duration="1000">
      <h2>Let's work together!</h2>

      <section id="contact" data-aos="fade-down-left" data-aos-duration="1000">
        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
            <h2>Contact Information</h2>
            <span>
              We’re here to help you plan the perfect adventure.
              Reach out to us through any of these channels.
            </span>

            <div className="info-block">
              <img src="./support.png" alt="Phone Icon" />
              <div>
                <strong>Phone</strong>
                <span>+234 707 659 2988</span>
                <span>Mon–Fri 9AM–6PM WAT</span>
              </div>
            </div>

            <div className="info-block">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561188.png" alt="Email Icon" />
              <div>
                <strong>Email</strong>
                <span>emmanuelwisdomolamide@gmail.com</span>
                <span>We’ll respond within 24 hours</span>
              </div>
            </div>

            <div className="info-block">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Office Icon" />
              <div>
                <strong>Office</strong>
                <span>Abuja, Nigeria</span>
                <span>Available for virtual consultations</span>
              </div>
            </div>

           

            <div className="footer-social">
              <p>Connect with us</p>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="mailto:info@travelsafe.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form" data-aos="fade-left" data-aos-duration="1000">
            <h2>Send us a Message</h2>
            <p>
              Tell us about your Website idea and we’ll help make it a reality.
            </p>

            {/* Added ref={formRef} here so EmailJS can read the fields */}
            <form id="clickable" ref={formRef} onSubmit={submitForm}>
              <div>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Matches template tag {{name}}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Matches template tag {{email}}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message" // Matches template tag {{message}}
                  placeholder="Tell us about your Website idea..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>

            <p className="privacy-note">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}