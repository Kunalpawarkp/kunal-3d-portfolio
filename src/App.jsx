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
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
