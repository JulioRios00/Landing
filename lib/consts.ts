
interface CoolStuffItem {
	text: string;
	link: string;
	type: 'video' | 'image';
  }

export const SKILLS = [
  { subject: "FastAPI", A: 85 },
  { subject: "React/Next.js", A: 75 },
  { subject: "PostgreSQL", A: 70 },
  { subject: "Node.js/NestJS", A: 85 },
  { subject: "TypeScript", A: 80 },
  { subject: "Python/Django", A: 85 },
  { subject: "AWS", A: 70 },
  { subject: "Machine Learning", A: 50 },

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
    year: "2024-Present",
    position: "Full-Stack Software Engineer",
    company: "Apollo Solutions Dev",
    description:
      "Collaborates closely with the Machine Learning and Computer Vision teams to develop AI-based solutions for financial systems and traffic event tracking.",
  },
  {
    year: "2021-2024",
    position: "Full-Stack Software Engineer",
    company: "Loggi",
    description:
      "Redesigned the package tracking system, creating an efficient and scalable event-driven architecture.",
  },
  {
    year: "2018-2019",
    position: "Technology and Development Intern",
    company: "Intersect NFT",
    description:
      "Assisted in the development of a web-based learning platform using React and Node.js.",
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
    "Full-Stack Developer with 3 years of experience in developing robust and scalable systems, impacting millions of users across various sectors. Proactive and results-oriented, stands out for the ability to deeply understand the products worked on, ensuring technical decisions align with user and stakeholder needs. Combines solid experience in web and backend development with a continuous commitment to improving user experience and solving complex problems. Skilled in collaborating with Machine Learning and Computer Vision teams to build AI-powered solutions that enhance system performance and user experience.",
  imageUrl: "/IMG_2940.jpg",
};

export const COOL_STUFF: CoolStuffItem[] = [
  {
    text: "I worked as a professional musical for 14 years before moving for technology   🎸",
    link: "https://drive.google.com/file/d/1jMSpwQhfvv5uBaNLLRXkThPQaX31Is4M/view?usp=sharing",
	type: "video"
  },
  {
    text: "Also worked as a university professor for the musical composition and conducting course",
    link: "/university.jpg",
	type: "image"
  },
  {
    text: "Ireland was the most incredible place I have lived in my entire life and I am looking forward to finding an opportunity to live out the rest of my days there!",
    link: "/ireland.jpg",
	type: "image"
  }
];


export const GENERAL_TEXT ={

}