import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import HeroCanvas from './HeroCanvas';

const Hero = () => {
  return (
    <section id="home" className="hero section shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-chip panel">Full Stack Developer • Software Engineer • 3D Web Builder</div>
          <h1>
            Hi, I&apos;m <span>{personalInfo.name}</span>
            <br />
            I design code-driven experiences with cinematic depth.
          </h1>
          <p className="hero-description">
            {personalInfo.shortBio} I combine React, Three.js, Java, and Spring Boot to build interfaces and systems that feel both elegant and powerful.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="stat-card panel tilt-card">
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <HeroCanvas />
          <div className="hero-floating-cards">
            <div className="floating-info panel tilt-card">
              <span>Role</span>
              <strong>{personalInfo.role}</strong>
            </div>
            <div className="floating-info panel tilt-card">
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
