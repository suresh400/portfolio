export type ProjectCategory = 'web' | 'mobile' | 'ui';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export const projectsData: Project[] = [
  {
    title: 'MyMedic Doctor Appointment System',
    description: 'A full-stack MERN-based doctor appointment platform with user/admin roles and responsive UI.',
    image: 'https://images.pexels.com/photos/6749776/pexels-photo-6749776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    // githubUrl: 'https://github.com/suresh400/mymedic/',
    year: '2024'
  },
  {
    title: 'Wellside Pharmacy System',
    description: 'A PHP & MySQL-based system to register pharmacies with document uploads and location details.',
    image: 'https://images.pexels.com/photos/6074936/pexels-photo-6074936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    // githubUrl: 'https://github.com/suresh400/PharmacyStore/',
    year: '2024'
  },
  {
    title: 'Hospital Management System (RBAC)',
    description: 'A role-based hospital management app with secure API access and admin control over hospitals.',
    image: 'https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Role-Based Access'],
    githubUrl: 'https://github.com/suresh400/HMS',
    liveUrl: 'https://hmsy.vercel.app/',
    year: '2025'
  },
  {
    title: 'PingMe Chat Application',
    description: 'A real-time React chat app with login, settings, and chat features using Context API and Node backend.',
    image: 'https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    tags: ['React', 'Node.js', 'WebSockets', 'Context API'],
    year: '2025'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio created with React and Vite showcasing skills, projects, and contact details.',
    image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    year: '2025'
  }
];
