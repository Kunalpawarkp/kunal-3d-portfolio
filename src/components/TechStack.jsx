import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import SkillGlobe from './SkillGlobe';

const TechStack = () => {
  return (
    <section id="stack" className="section shell">
      <SectionHeading
        eyebrow="Technology Stack"
        title="A flagship 3D stack section with a premium executive feel"
        description="Instead of a normal list of tools, this section presents the stack as a cinematic visual system. The result feels cleaner, more memorable, and far more premium."
      />

      <div className="stack-premium-layout">
        <motion.div
          className="stack-premium-copy panel"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow tiny">Why this feels premium</span>
          <h3>Not just a skill list — a strong product-level visual statement.</h3>
          <p>
            This section brings together clean motion, spatial depth, restrained glow, and focused
            interaction to present the engineering stack in a way that feels more like a high-end
            product launch than a typical developer portfolio.
          </p>
          <p>
            It is built to feel polished, modern, and intentional while still staying efficient
            enough for a real portfolio deployment.
          </p>
        </motion.div>

        <motion.div
          className="stack-premium-visual panel"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SkillGlobe />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
