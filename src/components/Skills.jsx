import Reveal from './Reveal';
import { skills } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Skills = () => {
  return (
    <section id="skills" className="section shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A balanced full stack toolkit for product engineering"
          description="From motion-rich interfaces to backend services and deployment workflows, my skill set is shaped to deliver modern digital products end-to-end."
          centered
        />
      </Reveal>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.08} y={38}>
            <article className="skill-card panel tilt-card cinematic-panel">
              <div className="skill-card-top">
                <span className="eyebrow tiny">{group.category}</span>
                <div className="glow-dot" />
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
