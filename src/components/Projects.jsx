import Reveal from './Reveal';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="section shell">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and realistic showcases aligned with my profile"
          description="Polished cards, layered lighting, clean CTAs, and premium motion help the projects feel more like product case studies."
          centered
        />
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1} y={50} scale={0.96}>
            <article className="project-card panel tilt-card cinematic-panel project-cinematic">
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
