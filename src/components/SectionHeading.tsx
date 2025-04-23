import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-400"></span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;