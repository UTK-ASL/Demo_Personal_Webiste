import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always open to discussing new opportunities, collaborations, or interesting projects.
          Feel free to reach out through any of the following channels.
        </p>
        <div className="contact-methods">
          <a href="mailto:your.email@example.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>
          <a href="https://github.com/xli" target="_blank" rel="noopener noreferrer" className="contact-card">
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <p>Check out my code</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
