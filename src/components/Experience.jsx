import Reveal from './Reveal';
import { experience } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="section shell">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Professional work shaped by delivery, ownership, and problem solving"
          description="My experience blends enterprise software work, product-focused implementation, and dependable engineering across fast-moving development cycles."
        />
      </Reveal>

      <div className="timeline">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={index * 0.1} x={index % 2 === 0 ? -30 : 30} y={18}>
            <article className="timeline-card panel cinematic-panel">
              <div className="timeline-dot" />
              <div className="timeline-header">
                <div>
                  <span className="eyebrow tiny">{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>
              </div>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
