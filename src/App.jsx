import React from "react";
import { projects, skills, experienceIcons } from "./content";
import Home from "./Home";
import ExperienceSection from "./sections/ExperienceSection";

function App() {
  return (
    <main className="home-page">
      <Home />

      <section className="content-section" id="projects">
        <div className="section-title">
          <p className="section-kicker">PROJECTS</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-overlay">
                <p>VIEW PROJECT</p>
                <h2>{project.title}</h2>
                <span>{project.stack.join(" • ")}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <p className="section-kicker">SKILLS</p>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <span className="skill" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <ExperienceSection />

      <section className="content-section contact-card" id="contact">
        <h2>Contact</h2>
        <p>
          Interested in working together? Feel free to reach out and I’ll get back to you
          quickly.
        </p>
        <a href="mailto:youremail@example.com">youremail@example.com</a>
      </section>
    </main>
  );
}

export default App;