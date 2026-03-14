import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Skills = () => {
  return (
    <section id="skills" className="section shell">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced full stack toolkit for product engineering"
        description="From motion-rich interfaces to backend services and deployment workflows, my skill set is shaped to deliver modern digital products end-to-end."
        centered
      />

      <div className="skills-grid">
        {skills.map((group, index) => (
          <motion.article
            key={group.category}
            className="skill-card panel tilt-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="skill-card-top">
              <span className="eyebrow tiny">{group.category}</span>
              <div className="glow-dot" />
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
