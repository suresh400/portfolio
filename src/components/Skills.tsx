import React from 'react';
import SectionHeading from './SectionHeading';
import { useTheme } from '../context/ThemeContext';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={theme === 'dark' ? skill.iconDark : skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 dark:bg-blue-400 h-full rounded-full origin-left transition-all duration-1000 transform scale-x-0 group-hover:scale-x-100"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {skill.level}% proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;