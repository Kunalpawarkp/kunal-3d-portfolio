import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { navLinks } from '../data/portfolioData';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <nav className="navbar shell panel">
        <a href="#home" className="brand">
          <span className="brand-mark">KP</span>
          <span className="brand-text">Kunal Pawar</span>
        </a>

        <div className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="button button-ghost desktop-cta" href="#contact">
            Let&apos;s Talk
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          className="mobile-nav shell panel"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button-primary" href="#contact" onClick={() => setOpen(false)}>
            Start a Conversation
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
