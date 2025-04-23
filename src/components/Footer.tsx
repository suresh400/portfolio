import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-600 dark:text-blue-400">S</span>uresh
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Frontend developer specializing in creating beautiful, responsive, and user-friendly web experiences.
            </p>
          </div>
          
          <div className="flex gap-4">
            <SocialIcon icon={<GitHub size={20} />} href="https://github.com/suresh400" label="GitHub" />
            <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ch-suresh-72b9a1244/" label="LinkedIn" />
            {/* <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com/" label="Twitter" /> */}
            <SocialIcon icon={<Mail size={20} />} href="mailto:chsuresh3839@gmail.com" label="Email" />
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {year} Chettukindi Suresh. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;