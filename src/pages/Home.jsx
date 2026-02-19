import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Blog from '../components/sections/Blog';

export default function Home() {
    return (
        <main>
            <section id="home" className="bg-white">
                <Hero />
            </section>

            <Skills />

            <Projects />

            <Blog />

            <section id="about" className="bg-white">
                <div id="education" className="absolute -top-20"></div> {/* Anchor for Education link */}
                <About />
            </section>

            <Contact />
        </main>
    );
};
