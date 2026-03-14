import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import HeroCanvas from './HeroCanvas';

const Hero = () => {
  return (
    <section id="home" className="hero hero-premium section shell">
      <div className="hero-premium-grid">
        <motion.div
          className="hero-premium-copy"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-premium-topline panel">
            <span className="status-dot" />
            Software Engineer at Idox • Full Stack Developer • 3D Web Builder
          </div>

          <h1 className="hero-premium-title">
            Building <span>premium digital products</span>
            <br />
            with engineering depth,
            <br />
            motion, and modern UI craft.
          </h1>

          <p className="hero-premium-description">
            I’m {personalInfo.name}, a full stack developer focused on elegant frontend
            experiences, reliable backend systems, and immersive product presentation.
            I work across React, Three.js, Java, Spring Boot, APIs, data, and delivery workflows.
          </p>

          <div className="hero-premium-actions">
            <a className="button button-primary" href="#projects">
              Explore Projects
            </a>
            <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <div className="hero-premium-proof">
            <div className="hero-proof-card panel tilt-card">
              <span>Experience</span>
              <strong>3+ Years</strong>
            </div>
            <div className="hero-proof-card panel tilt-card">
              <span>Core Stack</span>
              <strong>React • Java</strong>
            </div>
            <div className="hero-proof-card panel tilt-card">
              <span>Focus</span>
              <strong>Frontend + Backend</strong>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-premium-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="hero-premium-canvas-wrap panel">
            <HeroCanvas />

            <div className="hero-premium-floating hero-float-one panel tilt-card">
              <span>Role</span>
              <strong>{personalInfo.role}</strong>
            </div>

            <div className="hero-premium-floating hero-float-two panel tilt-card">
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </div>

            <div className="hero-premium-floating hero-float-three panel tilt-card">
              <span>Availability</span>
              <strong>Open to strong product and engineering opportunities</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
