import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Research Collaboration',
      organization: 'Oak Ridge National Laboratory (ORNL)',
      period: '2023 - Present',
      description: 'Collaborated on advanced manufacturing research projects, focusing on optimization of energy systems and process efficiency. Applied statistical modeling and machine learning techniques to analyze large-scale industrial datasets.',
      achievements: [
        'Developed predictive models for energy consumption optimization',
        'Implemented data-driven approaches to improve manufacturing processes',
        'Collaborated with cross-functional teams on research initiatives'
      ]
    },
    {
      title: 'Industrial Engineering Projects',
      organization: 'Department of Energy (DOE)',
      period: '2022 - 2023',
      description: 'Worked on industrial projects related to energy efficiency and systems optimization. Conducted comprehensive analyses using Six Sigma and Lean methodologies.',
      achievements: [
        'Led process improvement initiatives resulting in 20% efficiency gains',
        'Analyzed complex systems using advanced statistical methods',
        'Prepared technical reports and presentations for stakeholders'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4>{exp.organization}</h4>
              <span className="experience-period">{exp.period}</span>
              <p>{exp.description}</p>
              <ul className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
