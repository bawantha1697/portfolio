const projects = [
  {
    title: 'Creative Portfolio',
    description: 'A bold personal site with motion, responsive sections, and project storytelling.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Task Dashboard',
    description: 'A clean productivity dashboard with filters, quick actions, and analytics cards.',
    stack: ['React', 'APIs', 'UX'],
  },
  {
    title: 'Brand Landing Page',
    description: 'A launch page designed to convert visitors with clear messaging and visual hierarchy.',
    stack: ['UI Design', 'Motion', 'Accessibility'],
  },
]

const skills = ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design', 'Git']

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Hi, I&apos;m your next React developer.</h1>
          <p className="lead">
            I build fast, elegant web experiences with a focus on clean UI, practical structure,
            and memorable presentation.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <div>
            <p className="card-label">Currently</p>
            <h2>Building thoughtful interfaces</h2>
          </div>
          <ul>
            <li>Focused on React and modern front-end workflows.</li>
            <li>Designing polished portfolio, product, and landing pages.</li>
            <li>Comfortable turning ideas into responsive experiences.</li>
          </ul>
        </aside>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects that show range and polish</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">About</p>
          <h2>Simple, clear, and built to feel personal</h2>
          <p className="body-copy">
            This portfolio layout gives you a strong starting point. You can swap in your name,
            projects, links, and contact details, then expand it into a deeper personal brand.
          </p>
        </div>

        <div className="skill-panel">
          <h3>Core Skills</h3>
          <div className="tag-row">
            {skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p className="body-copy">
          Add your email, GitHub, LinkedIn, and any other links here so visitors can reach you
          quickly.
        </p>
        <a className="primary-button" href="mailto:you@example.com">
          you@example.com
        </a>
      </section>
    </main>
  )
}

export default App