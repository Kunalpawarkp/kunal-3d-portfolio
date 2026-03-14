import About from './components/About';
import BackgroundScene from './components/BackgroundScene';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <div className="app-shell">
      <BackgroundScene />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
