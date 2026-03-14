import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="section shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional work shaped by delivery, ownership, and problem solving"
        description="My experience blends enterprise software work, product-focused implementation, and dependable engineering across fast-moving development cycles."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="timeline-card panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
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
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
