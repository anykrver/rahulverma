import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App bg-white">
      <Navigation />
      
      <main>
        <section id="home" className="bg-white">
          <Hero />
        </section>
        {/* Skills & Expertise Section */}
        <SkillsSection />
        
        
        <section id="projects" className="bg-white">
          <Projects />
        </section>
        
        <section id="about" className="bg-white">
          <About />
        </section>
        
        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;