import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="section shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work and realistic showcases aligned with my profile"
        description="Polished cards, layered lighting, clean CTAs, and premium motion help the projects feel more like product case studies."
        centered
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card panel tilt-card"
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="project-lights">
              <span />
              <span />
              <span />
            </div>

            <div className="project-header">
              <span className="eyebrow tiny">Case Study 0{index + 1}</span>
              <h3>{project.title}</h3>
            </div>

            <p>{project.blurb}</p>

            <div className="project-tags">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-impact">
              <strong>Impact</strong>
              <p>{project.impact}</p>
            </div>

            <div className="project-actions">
              <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a className="button button-ghost" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
