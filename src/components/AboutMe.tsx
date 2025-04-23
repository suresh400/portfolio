import React from 'react';
import { Code, Palette, Globe, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const AboutMe: React.FC = () => {
  const qualities = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'I write structured, maintainable, and optimized code for scalable applications.'
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative Design',
      description: 'Crafting engaging and responsive UIs using React, Bootstrap, and modern CSS.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Responsive',
      description: 'All my web apps are fully responsive, working seamlessly across all screen sizes.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Versatile Tech Stack',
      description: 'From MERN stack to PHP & MySQL, I build dynamic solutions with secure architecture.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="About Chettukindi Suresh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-600 dark:border-blue-400 rounded-lg -z-10" />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Frontend Developer & MERN Stack Enthusiast
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm <strong>Chettukindi Suresh</strong>, a dedicated and adaptable developer passionate about building scalable and user-friendly web applications. With experience in both MERN stack and PHP-based systems, I specialize in full-stack development, UI/UX integration, and database-driven applications.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My journey includes working on projects like <strong>MyMedic Hospital Management System</strong> using the MERN stack with role-based access and secure APIs, and the <strong>Wellside Pharmacy System</strong> built with PHP and MySQL. I'm a proud participant of <strong>DSA training in C++ by Cipher Schools</strong> and certified in <strong>Web Development, Cloud Computing, and Computer Architecture</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                      {quality.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
