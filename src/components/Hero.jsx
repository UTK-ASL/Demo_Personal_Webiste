import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">John Doe</h1>
        <h2 className="hero-subtitle">Industrial Engineer & Data Scientist</h2>
        <p className="hero-description">
          Passionate about leveraging data science and industrial engineering principles
          to solve complex problems and drive operational excellence.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/xli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
