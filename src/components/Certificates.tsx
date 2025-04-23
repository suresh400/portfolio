import React from 'react';
import SectionHeading from './SectionHeading';
import CertificateCard from './CertificateCard';
import { certificatesData } from '../data/certificates';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Certificates" 
          subtitle="Professional certifications and achievements"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificatesData.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;