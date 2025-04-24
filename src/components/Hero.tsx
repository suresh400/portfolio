import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import SocialIcon from './SocialIcon';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/cv.pdf';

const Hero: React.FC = () => {
  const handleViewResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Chettukindi_Suresh_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Profile Image - Left Side */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-100 md:w-80 md:h-90 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <img
              src={profileImage}
              alt="Chettukindi Suresh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Right Side */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Chettukindi Suresh
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-semibold mb-6">
            Frontend Developer
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
            Passionate about crafting seamless, interactive user interfaces with modern web technologies like React, Tailwind, and TypeScript.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition"
            >
              Contact Me
            </button>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-xl transition"
            >
              View Projects
            </button>

            <button
              onClick={handleViewResume}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl shadow-md transition"
            >
              View Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-5 justify-center md:justify-start">
            <SocialIcon
              icon={<GitHub size={20} />}
              href="https://github.com/suresh400"
              label="GitHub"
            />
            <SocialIcon
              icon={<Linkedin size={20} />}
              href="https://www.linkedin.com/in/ch-suresh-72b9a1244/"
              label="LinkedIn"
            />
            <SocialIcon
              icon={<Mail size={20} />}
              href="mailto:chsuresh3839@gmail.com"
              label="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
