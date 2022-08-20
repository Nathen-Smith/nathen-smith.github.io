import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Intro, About, showSkillBar } from './constants';
import Experience from './components/Experience';

import SkillsBar from './components/SkillsBar';
import SkillsIcons from './components/SkillsIcons';

import Projects from './components/Projects';
import Footer from './components/Footer';

const Layout = () => {
  const isNotMobile = useMediaQuery({ query: '(min-width: 640px)' });

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <Intro />
      {isNotMobile ? (
        <div id="about" className="scroll-mt-16 mb-2">
          <About />
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16">
            <div id="experience" className="scroll-mt-16">
              <div className="text-center text-4xl mb-2">experience</div>
              <Experience />
            </div>
            <div id="skills" className="scroll-mt-16">
              <div className="text-center text-4xl mb-2">skills</div>
              {showSkillBar ? <SkillsBar /> : <SkillsIcons />}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div id="about" className="scroll-mt-16 mb-2">
            <About />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16">
            <div id="experience" className="scroll-mt-16">
              <div className="text-center text-4xl mb-2">experience</div>
              <Experience />
            </div>
            <div id="skills" className="scroll-mt-16">
              <div className="text-center text-4xl mb-2">skills</div>
              {showSkillBar ? <SkillsBar /> : <SkillsIcons />}
            </div>
          </div>
        </div>
      )}
      <div id="portfolio" className="scroll-mt-16 mb-2">
        <div className="text-center text-4xl mb-2">{'work i\'m proud of'}</div>
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-16 mb-2">
        <div className="text-center text-4xl mb-2">get in touch!</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
