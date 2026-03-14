import { motion } from 'framer-motion';
import { techOrbit } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const TechStack = () => {
  return (
    <section id="stack" className="section shell">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools and technologies I use to shape modern products"
        description="This section blends a 3D-inspired orbit layout with a premium glass panel system to keep the interface dynamic and visually deep."
      />

      <div className="stack-layout panel">
        <div className="stack-copy">
          <h3>Engineering with both product taste and systems thinking</h3>
          <p>
            I work across user-facing interfaces, backend services, data layers, testing, and release pipelines. My strongest value comes from connecting product polish with dependable implementation.
          </p>
        </div>

        <motion.div
          className="orbit-grid"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          {techOrbit.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="orbit-chip tilt-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.45 }}
                whileHover={{ y: -6, rotateX: 8, rotateY: -8 }}
              >
                <Icon />
                <span>{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
