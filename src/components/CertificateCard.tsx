import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
            <Award size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {certificate.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              {certificate.issuedBy}
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
              <Calendar size={14} className="mr-1" />
              <span>{certificate.date}</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {certificate.description}
            </p>
            
            {certificate.credentialUrl && (
              <a 
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Credential <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;