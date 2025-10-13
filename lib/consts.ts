interface CoolStuffItem {
  text: string;
  link: string;
  type: "video" | "image";
  secondaryText?: string;
}

export const SKILLS = [
  { subject: "FastAPI", proficiency: "Strong", level: 85 },
  { subject: "React/Next.js", proficiency: "Strong", level: 75 },
  { subject: "PostgreSQL", proficiency: "Medium", level: 70 },
  { subject: "Node.js/NestJS", proficiency: "Strong", level: 85 },
  { subject: "TypeScript", proficiency: "Strong", level: 80 },
  { subject: "Python/Django", proficiency: "Strong", level: 85 },
  { subject: "AWS", proficiency: "Medium", level: 70 },
  { subject: "Machine Learning", proficiency: "Low", level: 50 },
  { subject: "Java/Spring Boot", proficiency: "Medium", level: 65 },
];

export const PROJECTS = [
  {
    name: "Package Tracking System",
    description:
      "Redesigned event-driven architecture improving performance by 30% using React, Node.js and PostgreSQL",
    link: "https://www.loggi.com/",
  },
  {
    name: "AI-Based Financial Systems",
    description:
      "Developed solutions integrating Machine Learning and Computer Vision for real-time data processing",
    link: "https://www.finanta.io/",
  },
  {
    name: "User Interface Modernization",
    description:
      "Led frontend redesign project increasing user satisfaction by 20% using React and TypeScript",
    link: "https://epi-demo-livid.vercel.app/dash",
  },
];

export const HISTORY = [
  {
    year: "2024-present",
    position: "Senior Full-Stack Software Engineer",
    company: "Serasa Experian",
    description:
      "Assisted in the development of a web-based learning platform using React and Node.js.",
    detailedDescription:
      "Full-Stack Software Engineer\nSerasa Experian | June 2024 – Present",
    details: [
      "Work in a multidisciplinary team on a post-agreement platform serving 100M+ users across Brazil.",
      "Develop the BFF (Backend-for-Frontend) layer to optimize data delivery for frontend applications.",
      "Implement and maintain JWT authentication to secure APIs and sessions.",
      "Enhance data-driven UIs to improve usability and product conversion.",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Next.js",
      "AWS",
      "TypeScript",
      "Agile methodologies (Kanban, SCRUM)",
    ],
  },
  {
    year: "2023-2024",
    position: "Full-Stack Software Engineer",
    company: "Apollo Solutions Dev",
    description:
      "Collaborates closely with the Machine Learning and Computer Vision teams to develop AI-based solutions for financial systems and traffic event tracking.",
    detailedDescription:
      "Full-Stack Software Engineer\nApollo Solutions Dev | May 2023 – May 2024",
    details: [
      "Developed a traffic analysis platform for a university in Los Angeles, processing data on vehicles, pedestrians, and cyclists to assess risks and safety measures.",
      "Implemented a dynamic and customizable interface for data visualization, working closely with the Machine Learning team.",
      "Led frontend development for the American loan platform Finanta.io, designing a modern interface serving thousands of users across the United States and Canada.",
      "Spearheading the migration of the legacy backend system to a new version, improving scalability and performance.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Python",
      "Java",
      "AWS",
    ],
  },
  {
    year: "2018-2023",
    position: "Full-Stack Software Engineer",
    company: "Loggi",
    description:
      "Redesigned the package tracking system, creating an efficient and scalable event-driven architecture.",
    detailedDescription:
      "Full-Stack Software Engineer\nLoggi | August 2018 – March 2023",
    details: [
      "Redesigned the package tracking system using an event-driven architecture, enhancing scalability and reliability.",
      "Optimized PostgreSQL queries, reducing redundant requests and improving database performance by 30%.",
      "Modernized the user interface, increasing user satisfaction by 20%.",
      "Promoted to Software Engineer from a pool of nearly 3,000 internal candidates, recognized for technical impact and problem-solving skills.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "React.js",
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Agile methodologies (Kanban, SCRUM)",
    ],
  },
];

export const CONTACT = [
  {
    name: "GitHub",
    link: "https://github.com/JulioRios00",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julio-araujo-a7719267/?locale=en_US",
  },
  {
    name: "Email",
    link: "mailto:julio.rios.araujo@gmail.com",
  },
];

export const HEADER = {
  name: "Julio Rios",
  title: "Fullstack Developer",
  description:
    "Full-Stack Developer with 7 years of experience in developing robust and scalable systems, impacting millions of users across various sectors. Proactive and results-oriented, stands out for the ability to deeply understand the products worked on, ensuring technical decisions align with user and stakeholder needs. Combines solid experience in web and backend development with a continuous commitment to improving user experience and solving complex problems. Skilled in collaborating with Machine Learning and Computer Vision teams to build AI-powered solutions that enhance system performance and user experience.",
  imageUrl: {
    light: "/profile.png",
    dark: "/IMG_2940.jpg",
  },
};

export const COOL_STUFF: CoolStuffItem[] = [
  {
    text: "I worked as a professional musician for 14 years before moving for technology   🎸",
    link: "https://drive.google.com/file/d/1jMSpwQhfvv5uBaNLLRXkThPQaX31Is4M/view?usp=sharing",
    type: "video",
    secondaryText: "You know that I'm no good - Amy Winehouse",
  },
  {
    text: "Also worked as a university professor for the musical composition and conducting course",
    link: "/university.jpg",
    type: "image",
    secondaryText: "Graduation of my students in musical composition",
  },
  {
    text: "Ireland was the most incredible place I have lived in my entire life and I'm looking forward to finding an opportunity to live out the rest of my days there!",
    link: "/ireland.jpg",
    type: "image",
    secondaryText: "Molly Malone Statue in Dublin",
  },
];

export const GENERAL_TEXT = {};
