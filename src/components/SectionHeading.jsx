import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, centered = false }) => {
  return (
    <motion.div
      className={`section-heading ${centered ? 'centered' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default SectionHeading;
