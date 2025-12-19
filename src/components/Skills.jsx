import { FaPython, FaRProject, FaChartBar, FaCogs, FaDatabase, FaChartLine } from 'react-icons/fa'
import { SiTableau, SiScikitlearn, SiTensorflow } from 'react-icons/si'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'R', icon: <FaRProject /> },
        { name: 'Machine Learning', icon: <SiScikitlearn /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'Statistical Analysis', icon: <FaChartBar /> }
      ]
    },
    {
      title: 'Industrial Engineering',
      skills: [
        { name: 'Six Sigma', icon: <FaCogs /> },
        { name: 'Lean Manufacturing', icon: <FaCogs /> },
        { name: 'Process Optimization', icon: <FaCogs /> },
        { name: 'Systems Design', icon: <FaCogs /> },
        { name: 'Quality Control', icon: <FaCogs /> }
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', icon: <SiTableau /> },
        { name: 'Power BI', icon: <FaChartLine /> },
        { name: 'Data Modeling', icon: <FaDatabase /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Skills & Expertise</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
