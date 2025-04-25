import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
