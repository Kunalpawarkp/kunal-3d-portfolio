import About from './components/About';
import BackgroundScene from './components/BackgroundScene';
import ChatAssistant from './components/ChatAssistant';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ParallaxSection from './components/ParallaxSection';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <div className="app-shell">
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <BackgroundScene />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <Navbar />

      <main>
        <Hero />

        <ParallaxSection className="parallax-wrap" offset={40}>
          <About />
        </ParallaxSection>

        <ParallaxSection className="parallax-wrap" offset={30}>
          <Skills />
        </ParallaxSection>

        <ParallaxSection className="parallax-wrap" offset={50}>
          <TechStack />
        </ParallaxSection>

        <ParallaxSection className="parallax-wrap" offset={35}>
          <Experience />
        </ParallaxSection>

        <ParallaxSection className="parallax-wrap" offset={45}>
          <Projects />
        </ParallaxSection>

        <ParallaxSection className="parallax-wrap" offset={25}>
          <Contact />
        </ParallaxSection>
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
