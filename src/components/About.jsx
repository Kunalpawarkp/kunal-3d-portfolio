import { motion } from 'framer-motion';
import { highlights } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="section shell">
      <SectionHeading
        eyebrow="About Me"
        title="A developer focused on depth, clarity, and real product impact"
        description="I enjoy building across the stack—turning product ideas into smooth frontend experiences, reliable backend systems, and memorable digital journeys with strong engineering discipline."
      />

      <div className="about-layout">
        <motion.div
          className="about-story panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I&apos;m Kunal Pawar, a software engineer who loves building rich user interfaces and solid backend foundations. My work spans enterprise applications, API-driven systems, and immersive frontend concepts where visual quality matters as much as clean architecture.
          </p>
          <p>
            I bring a full stack mindset to every product—thinking through usability, maintainability, release flow, and long-term scalability. I especially enjoy projects where strong engineering meets polished design.
          </p>
        </motion.div>

        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="highlight-card panel tilt-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="highlight-index">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
