import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { contactCards, personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailLink = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Hi Kunal,%0D%0A%0D%0AName: ${form.name || ''}%0D%0AEmail: ${form.email || ''}%0D%0A%0D%0AMessage:%0D%0A${form.message || ''}`,
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section shell contact-section">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something premium, useful, and unforgettable"
          description="This contact area continues the same glassy 3D language with layered panels, depth highlights, and a direct path to connect."
        />
      </Reveal>

      <div className="contact-layout">
        <div className="contact-cards">
          {contactCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} y={36}>
              <a href={card.href} className="contact-card panel tilt-card cinematic-panel">
                <span className="eyebrow tiny">{card.title}</span>
                <strong>{card.value}</strong>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal x={28} y={22}>
          <form className="contact-form panel cinematic-panel">
            <div className="form-grid">
              <label>
                <span>Your Name</span>
                <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
              </label>
              <label>
                <span>Your Email</span>
                <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
              </label>
            </div>

            <label>
              <span>Your Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the role, product, or idea you want to discuss"
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <div className="form-actions">
              <a className="button button-primary" href={mailLink}>
                Send via Email App
              </a>
              <a className="button button-ghost" href={`mailto:${personalInfo.email}`}>
                Direct Email
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
