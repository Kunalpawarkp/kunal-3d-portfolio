import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="footer shell">
      <div className="footer-panel panel">
        <div>
          <span className="eyebrow tiny">Portfolio</span>
          <h3>{personalInfo.name}</h3>
          <p>{personalInfo.tagline}</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
