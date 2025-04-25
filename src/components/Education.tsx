import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/education';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="mt-12 space-y-8">
          {educationData.map((education, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    {education.institution}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {education.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {education.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {education.description}
                  </p>
                  
                  {education.achievements && (
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {education.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {education.gpa && (
                  <div className="md:text-right">
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <span className="block text-sm text-gray-600 dark:text-gray-400">GPA</span>
                      <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                        {education.gpa}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
