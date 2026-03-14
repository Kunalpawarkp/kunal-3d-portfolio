import { motion } from 'framer-motion';

const Reveal = ({
  children,
  delay = 0,
  y = 40,
  x = 0,
  scale = 0.98,
  className = '',
  once = true,
  amount = 0.2,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
