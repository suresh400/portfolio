import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import SocialIcon from './SocialIcon';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/cv.pdf'; 

const Hero: React.FC = () => {
  const handleViewResume = () => {
    // Fetch the PDF and open it in same tab
    fetch(resumePDF).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        window.location.href = fileURL; // open in same tab
      });
    });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-10 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Profile Image */}
          <div className="w-100 h-100 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative">
            <img 
              src={profileImage}
              alt="Chettukindi Suresh" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="block">Hello, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Chettukindi Suresh
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Frontend Developer
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about building responsive, elegant, and user-friendly web interfaces using modern web technologies like React, Tailwind, TypeScript, and more.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                Contact Me
              </button>

              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-300"
              >
                View Projects
              </button>

              <button 
                onClick={handleViewResume}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
              >
                View Resume
              </button>
            </div>
            
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <SocialIcon icon={<GitHub size={20} />} href="https://github.com/suresh400" label="GitHub" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ch-suresh-72b9a1244/" label="LinkedIn" />
              <SocialIcon icon={<Mail size={20} />} href="mailto:chsuresh3839@gmail.com" label="Email" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
