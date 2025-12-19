import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Manufacturing Process Optimization',
      description: 'Developed a machine learning model to optimize manufacturing processes, resulting in significant cost reduction and efficiency improvements.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Energy Systems Analysis',
      description: 'Comprehensive data analysis of energy consumption patterns using statistical modeling and visualization techniques.',
      technologies: ['R', 'ggplot2', 'Statistical Modeling'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Predictive Maintenance Dashboard',
      description: 'Built an interactive dashboard for predictive maintenance using real-time sensor data and machine learning algorithms.',
      technologies: ['Python', 'TensorFlow', 'Power BI', 'SQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Implemented Lean Six Sigma methodologies to streamline supply chain operations and reduce waste.',
      technologies: ['Process Mapping', 'Six Sigma', 'Data Analysis'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
