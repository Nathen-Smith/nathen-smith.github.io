import React from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import getProjectTechStyles from './projectTechStyling';

// sections that show up and get highlighted in the nav bar
export const pageSections = [
  {
    name: 'Nathen', to: '#', active: true, lgInvisible: false,
  },
  {
    name: 'About', to: '#about', active: false, lgInvisible: false,
  },
  {
    name: 'Experience', to: '#experience', active: false, lgInvisible: true,
  },
  {
    name: 'Skills', to: '#skills', active: false, lgInvisible: true,
  },
  {
    name: 'Portfolio', to: '#portfolio', active: false, lgInvisible: false,
  },
  {
    name: 'Contact', to: '#contact', active: false, lgInvisible: false,
  },
];

// icons that show up on the right side of the nav bar
// set mobileInvisible true to place the icon into the collapse-able dropdown
export const navIconLinks = [
  {
    icon: faGithub,
    link: 'https://github.com/Nathen-Smith',
    mobileInvisible: false,
  },
  {
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/in/nathens/',
    mobileInvisible: true,
  },
  {
    icon: faEnvelope,
    link: 'mailto:nathencsmith@gmail.com',
    mobileInvisible: true,
  },
];

// items to show up on the left side of the nav bar when in mobile view
export const mobileLeftItems = [
  { name: 'Nathen Smith', to: '#', className: 'font-bold' },
];

export const Intro = () => (
  <div className="grid grid-cols-2 h-screen">
    <div className="sm:justify-center flex flex-col text-left mt-10 sm:-mt-28">
      <div className="text-9xl text-black dark:text-white">Hi.</div>
      <div className="text-3xl text-black dark:text-white">
        {'I\'m Nathen Smith.'}
      </div>
      <br />
      <div className="text-gray-800 dark:text-gray-300 text-lg">
        <div>Experienced Full Stack Developer.</div>
        <div>UIUC Computer Engineer.</div>
        <div>React, Python, and TypeScript Enthusiast.</div>
        <div>Fish shell-er.</div>
        <div>Badminton Player.</div>
      </div>
      <br />
      <a
        href="#about"
        className="btn dark:bg-white text-white dark:text-black bg-blue-500 px-3 py-2 rounded-md btn-sm font-bold text-sm self-start"
      >
        MORE ABOUT ME
      </a>
    </div>
    <div className="sm:justify-center flex flex-col text-left mt-10 sm:-mt-28">
      <img
        src="/assets/me.webp"
        alt="portrait"
        className="w-4/5 sm:w-3/4 lg:w-2/3 mx-auto mt-6 sm:mt-0"
      />
    </div>
  </div>
);

export const About = () => (
  <div>
    <div className="text-center text-4xl mb-2">about</div>
    <div className="text-lg mb-2">
      I am a Senior studying Computer Engineering at the University of
      Illinois at Urbana-Champaign. Detail-oriented software developer where I
      enjoy fostering a positive development environment, designing robust,
      scalable solutions, and ensuring responsive, intuitive user experiences.
      As a perfectionist, my favorite part of coding is the process of trying
      to break a software system and fixing edge cases in order to ensure
      safety and ease of use.
    </div>
  </div>
);

export const experience = [
  {
    company: 'Forward Data Lab: Professor K.C.C. Chang',
    title: 'Software Engineer Intern',
    date: 'Sep 2021 - May 2022',
    description: `I am responsible for developing an API and frontend utilizing
      higher education APIs to meaningfully and 
      efficiently compare institutions in addition to backend performance 
      and frontend bugs. I implemented 2 pagination components, sorting with 10 total options,
      bar chart visualizations, frontend input and backend error handling, and responsive tables
      and image displaying used in 6+ frontend components. I halved request time and 
      response size by using concurrent API calls and combining duplicate fields. I reduced the 
      latency of the slowest MySQL queries 5 times by using DB indexing, compiler 
      and algorithmic simplification.`,
  },
  {
    company: 'UIUC Department of ECE',
    title: 'Course Assistant (Computer Architecture)',
    date: 'Jan 2022 - May 2022',
    description: `Guided students through the design and implementation of computer 
      architecture problems in SystemVerilog and C`,
  },
  {
    company: 'UIUC Department of CS',
    title: 'Course Assistant (Database Systems)',
    date: 'Aug 2021 - Dec 2021',
    description:
      'Guided students to find solutions to SQL, NoSQL, database problems during lecture, in office hours, and the class forum. I gave feedback and advice to final project design choices, a database driven web app. Lastly, I reviewed and contributed to writing homework and exam questions, and graded homework.',
  },
  {
    company: 'Ziggurat Technologies',
    title: 'Full Stack Engineer Intern',
    date: 'Jul 2021 - Sep 2021',
    description:
      'I implemented and designed user update functionality through frontend, database update, middleware, and Twilio Two-Factor Authentication APIs. The stack is React Native, Redux, Mongoose, Express.js. I am responsible for debugging API, frontend bugs, and assigning tasks to other interns. I maintained Jira issue tracking and documented build instructions for frontend backend connecting with mobile simulator.',
  },
];

export const showSkillBar = false; // show icons instead

export const skills = [
  {
    name: 'JavaScript & Node',
    textColor: 'black',
    backgroundColor: '#F0DB4F',
    percentage: '85%',
  },
  {
    name: 'HTML',
    textColor: 'white',
    backgroundColor: '#e34c26',
    percentage: '70%',
  },
  {
    name: 'Sass & CSS',
    textColor: 'white',
    backgroundColor: '#CD6799',
    percentage: '65%',
  },
  {
    name: 'TypeScript',
    textColor: 'white',
    backgroundColor: '#007acc',
    percentage: '80%',
  },
  {
    name: 'Python',
    textColor: 'white',
    backgroundColor: '#ff9800',
    percentage: '90%',
  },
  {
    name: 'Go',
    textColor: 'white',
    backgroundColor: '#29BEB0',
    percentage: '50%',
  },
  {
    name: 'React',
    textColor: 'white',
    backgroundColor: '#61DBFB',
    percentage: '90%',
  },
  {
    name: 'SQL',
    textColor: 'white',
    backgroundColor: '#00758F',
    percentage: '90%',
  },
  {
    name: 'MongoDB',
    textColor: 'white',
    backgroundColor: '#4DB33D',
    percentage: '90%',
  },
  {
    name: 'Docker',
    textColor: 'white',
    backgroundColor: '#0db7ed',
    percentage: '60%',
  },
  {
    name: 'Flask',
    textColor: 'white',
    backgroundColor: '#b19cd9',
    percentage: '60%',
  },
  {
    name: 'C++',
    textColor: 'white',
    backgroundColor: '#f34b7d',
    percentage: '60%',
  },
];

// skill icons data, use darkMode: to turn icons white when in dark mode
export const skillIcons = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    alt: 'python',
    name: 'Python',
    darkMode: false,
  },

  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    alt: 'js',
    name: 'JavaScript',
    darkMode: false,
  },
  {
    src: '/assets/icons/flask.svg',
    alt: 'flask',
    name: 'Flask',
    darkMode: true,
  },
  {
    src: '/assets/icons/mysql.svg',
    alt: 'mysql',
    name: 'MySQL',
    darkMode: false,
  },
  {
    src: '/assets/icons/react.svg',
    alt: 'react',
    name: 'React',
    darkMode: false,
  },
  {
    src: '/assets/icons/typescript.svg',
    alt: 'ts',
    name: 'TypeScript',
    darkMode: false,
  },
  {
    src: 'https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg',
    alt: 'firebase',
    name: 'Firebase',
    darkMode: false,
  },

  {
    src: '/assets/icons/mongodb.svg',
    alt: 'mongodb',
    name: 'MongoDB',
    darkMode: false,
  },
  {
    src: '/assets/icons/docker.svg',
    alt: 'docker',
    name: 'Docker',
    darkMode: false,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    alt: 'cpp',
    name: 'C++',
    darkMode: false,
  },
  {
    src: '/assets/icons/graphql.svg',
    alt: 'graphql',
    name: 'GraphQL',
    darkMode: false,
  },
  {
    src: '/assets/icons/nodejs.svg',
    alt: 'node',
    name: 'Node.js',
    darkMode: false,
  },
  {
    src: 'https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg',
    alt: 'svelte',
    name: 'Svelte',
    darkMode: false,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    alt: 'next',
    name: 'Next.js',
    darkMode: true,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
    alt: 'sass',
    name: 'Sass',
    darkMode: false,
  },
  {
    src: '/assets/icons/gitlab-icon.svg',
    alt: 'gitlab',
    name: 'GitLab CI/CD',
    darkMode: false,
  },
  {
    src: 'https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg',
    alt: 'pg',
    name: 'PostgreSQL',
    darkMode: false,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    alt: 'aws',
    name: 'AWS',
    darkMode: true,
  },
  {
    src: '/assets/icons/redux.svg',
    alt: 'redux',
    name: 'Redux',
    darkMode: false,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    alt: 'go',
    name: 'Go',
    darkMode: false,
  },
  {
    src: '/assets/icons/prisma.svg',
    alt: 'prisma',
    name: 'Prisma',
    darkMode: true,
  },
  {
    src: '/assets/icons/tailwindcss.svg',
    alt: 'twcss',
    name: 'Tailwind CSS',
    darkMode: false,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    alt: 'gh',
    name: 'GitHub',
    darkMode: true,
  },
  {
    src: '/assets/icons/java.svg',
    alt: 'java',
    name: 'Java',
    darkMode: false,
  },
];

export const projects = [
  {
    src: '/assets/projects/2048.webp',
    alt: '2048',
    name: '2048',
    description:
      'Clone of 2048, featuring a spawning algorithm that reduces frustration',
    link: 'https://nathensmith.com/2048',
    tech: getProjectTechStyles([
      'TypeScript', 'React', 'TailwindCSS',
    ]),
  },
  {
    src: '/assets/projects/childdevtracker.webp',
    alt: 'childdevtracker',
    name: 'Child Development Tracker',
    description:
      "Full stack web app for a user to track their child's development and diet, changes, and general journal entries",
    link: 'https://github.com/Nathen-Smith/child-development-tracker',
    tech: getProjectTechStyles([
      'TypeScript', 'React', 'React-Router', 'Axios', 'Mongoose', 'MongoDB', 'Firebase', 'Docker',
    ]),
  },
  {
    src: '/assets/projects/fpga_mario.webp',
    alt: 'fpgamario',
    name: 'FPGA Mario NES',
    description:
      'FPGA SOC Mario NES in SystemVerilog. Built on a DE-10 Lite FPGA, synthesized in Quartus Prime 18.1',
    link: 'https://github.com/Nathen-Smith/FPGA_super_mario_bros',
    tech: getProjectTechStyles(['SystemVerilog', 'C']),
  },
  {
    src: '/assets/projects/databoard.webp',
    alt: 'data-board',
    name: 'Data Dashboard',
    description: 'Real-time Business Intelligence on Kaggle Movies Dataset',
    link: 'https://github.com/Nathen-Smith/data-dashboard',
    tech: getProjectTechStyles(['TypeScript', 'React', 'Firebase', 'Python']),
  },
  {
    src: '/assets/projects/todoistapi.webp',
    alt: 'todoist',
    name: 'Todoist API',
    description:
      'Robust CRUD API with cascading updates on users and their tasks',
    link: 'https://github.com/Nathen-Smith/todoist-api',
    tech: getProjectTechStyles(['JavaScript', 'Express.js', 'Mongoose', 'MongoDB', 'Python']),
  },
  {
    src: '/assets/projects/marvelapp.webp',
    alt: 'marvelapiapp',
    name: 'Marvel API App',
    description: 'Frontend app using Marvel API',
    link: 'https://nathensmith.com/marvel-api-app/',
    tech: getProjectTechStyles(['TypeScript', 'React', 'Next.js', 'React-Router', 'Axios', 'TailwindCSS']),
  },
  {
    src: '/assets/projects/hippocampus.webp',
    alt: 'hippocampus',
    name: 'HippoCampus',
    description:
      'A student matching database-driven web app that allows users to customize their profile and set preferences on a desired study buddy or project partner',
    link: 'https://github.com/Nathen-Smith/HippoCampus',
    tech: getProjectTechStyles(['JavaScript', 'Python', 'React', 'Flask', 'MySQL']),
  },
  {
    src: '/assets/projects/linux.webp',
    alt: 'os',
    name: 'Operating System',
    description:
      'Preemptively multitasked operating system including system calls, virtual memory, interrupts and exceptions, a GUI, and a filesystem starting from a bootloader',
    link: 'https://github.com/Nathen-Smith/Operating-System',
    tech: getProjectTechStyles(['C', 'x86']),
  },
];
