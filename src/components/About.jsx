import Reveal from './Reveal';
import { highlights } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="section shell">
      <Reveal>
        <SectionHeading
          eyebrow="About Me"
          title="A developer focused on depth, clarity, and real product impact"
          description="I enjoy building across the stack—turning product ideas into smooth frontend experiences, reliable backend systems, and memorable digital journeys with strong engineering discipline."
        />
      </Reveal>

      <div className="about-layout">
        <Reveal y={36}>
          <div className="about-story panel cinematic-panel">
            <p>
              I&apos;m Kunal Pawar, a software engineer who loves building rich user interfaces and solid backend foundations. My work spans enterprise applications, API-driven systems, and immersive frontend concepts where visual quality matters as much as clean architecture.
            </p>
            <p>
              I bring a full stack mindset to every product—thinking through usability, maintainability, release flow, and long-term scalability. I especially enjoy projects where strong engineering meets polished design.
            </p>
          </div>
        </Reveal>

        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} y={42}>
              <article className="highlight-card panel tilt-card cinematic-panel">
                <div className="highlight-index">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
