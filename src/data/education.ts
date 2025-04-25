export interface Education {
    degree: string;
    institution: string;
    duration: string;
    location: string;
    description: string;
    achievements?: string[];
    gpa?: string;
  }
  
  export const educationData: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Lovely professional University',
      duration: '2022 - 2026',
      location: 'Punjab, India',
      description: 'Comprehensive study of computer science fundamentals, algorithms, and software development.',
    }
  ];
