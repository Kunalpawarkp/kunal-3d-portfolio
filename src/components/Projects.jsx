import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="section shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work and realistic showcases aligned with my profile"
        description="These project cards are designed with premium depth, stacked lighting, and subtle perspective movement to keep the portfolio visually immersive throughout."
        centered
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card panel tilt-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
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
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
