export interface Certificate {
  title: string;
  issuedBy: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export const certificatesData: Certificate[] = [
  {
    title: 'Data Structures & Algorithms using C++',
    issuedBy: 'CipherSchools',
    date: 'August 2023',
    description: 'Completed intensive summer training on DSA using C++ covering arrays, stacks, queues, trees, sorting, and recursion.',
    credentialUrl: 'https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65e02' // Replace with actual URL
  },
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    issuedBy: 'Johns Hopkins University',
    date: 'April 2024',
    description: 'Completed a comprehensive introduction to web development using HTML, CSS, and JavaScript, focusing on responsive design and interactive web features.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/HFSEYPUV8YFM' // Replace if available
  },
  {
    title: 'Server side JavaScript with Node.js',
    issuedBy: 'NIIT',
    date: 'April 2024',
    description: 'Developed APIs and backend logic using Node.js, Express.js, and connected to MongoDB for full-stack functionality.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4UGVNDXS74QW' // Replace with actual
  },
  {
    title: 'Programming in C++: A Hands-on Introduction',
    issuedBy: 'Codio',
    date: 'January 2024',
    description: 'Completed a hands-on C++ specialization covering programming fundamentals, recursion, and object-oriented concepts like inheritance and encapsulation.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/Z58YC9LWQ6NU' // Replace if available
  }
  // },
  // {
  //   title: 'Git and GitHub for Beginners',
  //   issuedBy: 'Coursera',
  //   date: 'June 2023',
  //   description: 'Mastered version control basics, Git commands, GitHub repositories, and collaboration workflows.',
  //   credentialUrl: 'https://coursera.org/certificate/git-beginner-suresh' // Replace with actual
  // },
  // {
  //   title: 'Node.js and Express.js Essentials',
  //   issuedBy: 'Udemy',
  //   date: 'February 2024',
  //   description: 'Developed APIs and backend logic using Node.js, Express.js, and connected to MongoDB for full-stack functionality.',
  //   credentialUrl: 'https://udemy.com/certificate/node-express-suresh' // Replace with actual
  // }
];
