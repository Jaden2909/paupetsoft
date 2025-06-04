import React from 'react';
import './Contact.css';
import useScrollFadeIn from './useScrollFadeIn';

const Contact = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.1);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container" {...fadeIn}>
        <h2>Let’s Build Something Exceptional</h2>
        <p className="contact-subtext">
          Whether you're ready to start a project or have questions, our team is here for you.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <p>Email us at:</p>
            <a href="mailto:contact@paupetsoft.com">contact@paupetsoft.com</a>
            <p>Call us at:</p>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
            <p>Visit us:</p>
            <span>123 Innovation Drive, Suite 456<br />Tech City, CA 98765</span>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
