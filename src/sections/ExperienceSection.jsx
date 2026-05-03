import React from "react";

function ExperienceSection() {
  return (
    <section className="content-section experience-section">
      <div className="section-title">
        <p className="section-kicker section-kicker-blue">EXPERIENCE</p>
      </div>

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-header">
            <h3>Frontend Developer (Personal Projects)</h3>
            <span>2023 - Present</span>
          </div>
          <p>
            Building modern web applications using React, focusing on UI/UX, performance, and
            responsive design.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ExperienceSection;