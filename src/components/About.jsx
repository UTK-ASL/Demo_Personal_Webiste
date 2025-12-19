import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate Industrial Engineer with expertise in data science and systems optimization.
            My background combines rigorous analytical training with hands-on experience in industrial
            settings, enabling me to bridge the gap between theoretical models and practical solutions.
          </p>
          <p>
            Throughout my career, I've specialized in applying Six Sigma methodologies, Lean Manufacturing
            principles, and advanced statistical analysis to drive operational improvements. My work at
            prestigious institutions like the Department of Energy (DOE) and Oak Ridge National Laboratory
            (ORNL) has given me unique insights into complex industrial challenges.
          </p>
          <p>
            I'm particularly interested in leveraging machine learning and data visualization techniques
            to uncover actionable insights from complex datasets, helping organizations make data-driven
            decisions that improve efficiency and reduce costs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
