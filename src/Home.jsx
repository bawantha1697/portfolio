import React from "react";
import { experienceIcons } from "./content";
import profileImg from "./profile.jpg";

function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">Bawantha</span>
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="avatar-wrap">
          <div className="avatar-ring">
            <img src={profileImg} alt="Profile" className="avatar-face" />
          </div>
        </div>

        <div className="hero-copy">
          <h1>
            I do code and
            <br />
            make content <span className="gradient-text">about it!</span>
          </h1>

          <p className="hero-description">
            I am a passionate Software Engineering student with a strong focus on frontend development. I specialize in building modern, responsive, and user-friendly web applications using React, JavaScript, HTML, and CSS.

I enjoy creating clean UI designs, smooth user experiences, and real-world projects such as dashboards, landing pages, and web apps. I am continuously learning and improving my skills by working on practical projects and exploring new technologies.

I am highly motivated to deliver quality work, meet deadlines, and help clients bring their ideas to life.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Get In Touch
            </a>
            <a className="button button-secondary" href="#">
              Download CV
            </a>
          </div>

          <div className="tech-stack-strip">
            <p className="tech-stack-label">EXPERIENCE WITH</p>
            <div className="tech-stack-icons">
              <div className="tech-box">JS</div>
              <div className="tech-box">N</div>
              <div className="tech-box">5</div>
              <div className="tech-box">3</div>
              <div className="tech-box tech-icon-react">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" strokeDasharray="4 4"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          border-bottom: 1px solid var(--line);
          position: sticky;
          top: 0;
          background: rgba(7, 17, 31, 0.8);
          backdrop-filter: blur(10px);
          z-index: 100;
        }

        .brand {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--text);
        }

        .brand-mark {
          background: linear-gradient(135deg, #ff7a45 0%, #d946ef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav a {
          color: var(--muted);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 200ms ease;
        }

        .nav a:hover {
          color: var(--text);
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          padding: 80px 32px;
          min-height: calc(100vh - 100px);
        }

        .avatar-wrap {
          display: flex;
          justify-content: center;
          order: -1;
        }

        .avatar-ring {
          width: 420px;
          height: 520px;
          margin: 0 auto;
          border-radius: 40px;
          background: linear-gradient(180deg, rgba(255, 122, 69, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%);
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.02);
        }

        .avatar-face {
          width: 100%;
          height: 100%;
          border-radius: 0;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .avatar-ring:hover .avatar-face {
          transform: scale(1.05);
        }

        .hero-copy {
          max-width: 100%;
          text-align: left;
        }

        .hero-copy h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 24px;
          color: var(--text);
        }

        .gradient-text {
          background: linear-gradient(90deg, #ff7a45 0%, #d946ef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 32px;
          max-width: 100%;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 32px;
          border-radius: 999px;
          border: 2px solid transparent;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 300ms ease;
          text-decoration: none;
          min-height: 48px;
        }

        .button-primary {
          background: var(--text);
          color: var(--bg);
        }

        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(244, 247, 251, 0.2);
        }

        .button-secondary {
          border-color: var(--text);
          color: var(--text);
          background: transparent;
        }

        .button-secondary:hover {
          border-color: var(--text);
          background: rgba(244, 247, 251, 0.05);
          transform: translateY(-2px);
        }

        .tech-stack-strip {
          width: 100%;
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tech-stack-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #475569;
          margin: 0 0 24px;
        }

        .tech-stack-icons {
          display: flex;
          gap: 12px;
          justify-content: flex-start;
          align-items: center;
        }

        .tech-box {
          width: 54px;
          height: 54px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: #94a3b8;
          transition: all 300ms ease;
        }

        .tech-box:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
          color: #f8fafc;
        }

        .tech-icon-react svg {
          width: 24px;
          height: 24px;
          opacity: 0.5;
        }

        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding: 60px 20px;
            gap: 40px;
          }

          .avatar-wrap {
            order: 0;
          }

          .avatar-ring {
            width: 280px;
            height: 360px;
            border-radius: 30px;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-copy h1 {
            font-size: clamp(2rem, 6vw, 3rem);
          }
        }

        @media (max-width: 640px) {
          .topbar {
            padding: 12px 16px;
          }

          .nav {
            gap: 16px;
            font-size: 0.85rem;
          }

          .hero-section {
            padding: 40px 16px;
            min-height: auto;
          }

          .avatar-ring {
            width: 220px;
            height: 280px;
            border-radius: 20px;
          }

          .hero-copy h1 {
            font-size: clamp(1.8rem, 5vw, 2.5rem);
          }

          .button {
            padding: 10px 24px;
            font-size: 0.9rem;
          }

          .experience-icons {
            gap: 8px;
          }

          .experience-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Home;