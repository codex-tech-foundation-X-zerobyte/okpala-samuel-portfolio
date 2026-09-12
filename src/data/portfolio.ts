export type Link = {
  label: string;
  href: string;
  icon?: "github" | "linkedin" | "x" | "mail";
};

export const profile = {
  name: "Okpala Chimaobi Samuel",
  title: "Software Developer",
  intro:
    "I build practical digital products that turn complex problems into clear, useful experiences.",
  description:
    "I am skilled in HTML, CSS, JavaScript, React, Node.js, TypeScript, Go, with a little bit of Python and PHP.",
  location: "Caritas University, Enugu",
  email: "okpalachimaobi55@gmail.com",
  phone: "08074133702",
  image: "",
  resume: "",
  availability: "Available for freelance · Open to work",
  accent: "#0d4f4a",
  story: [
    "I’m a Computer Science student and developer with a strong interest in building practical technology that solves real problems.",
    "My journey into software development has grown from simply learning how code works to actually thinking about how software can be turned into useful products, businesses, and tools. I enjoy exploring new technologies, building systems from the ground up, solving technical problems, and continuously improving what I create.",
    "I’m particularly interested in web development, software engineering, cloud technologies, backend systems, and building products that can be used by real people. I enjoy working across different parts of a project, from designing the user experience and building the frontend to developing the backend, database, authentication, deployment, and the systems that bring everything together.",
    "Beyond writing code, I’m interested in entrepreneurship and collaboration. I want to build products that have real value, work with other developers and creatives, and eventually turn the skills I’m developing into solutions that businesses and individuals can rely on.",
    "I’m still growing, learning, and experimenting, but every project gives me an opportunity to become a better developer and problem solver. My long-term goal is to build technology that is not only technically impressive, but genuinely useful.",
    "For me, development is more than just writing code. It’s about taking an idea, understanding the problem behind it, and turning that idea into something real.",
  ],
};

export const skills = [
  {
    name: "React",
    category: "Frontend",
    proficiency: 85,
    level: "Advanced",
    description: "Building responsive and interactive web applications.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiency: 78,
    level: "Proficient",
    description: "Creating maintainable, type-safe application code.",
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: 75,
    level: "Proficient",
    description: "Developing APIs and server-side application logic.",
  },
  {
    name: "Go",
    category: "Backend",
    proficiency: 60,
    level: "Growing",
    description: "Exploring performant services and backend systems.",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    proficiency: 90,
    level: "Advanced",
    description:
      "Crafting accessible, responsive interfaces from the ground up.",
  },
  {
    name: "Supabase",
    category: "Database",
    proficiency: 72,
    level: "Proficient",
    description: "Working with authentication, data, and backend services.",
  },
];

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Go",
  "Python",
  "PHP",
  "Supabase",
  "Git",
  "GitHub",
  "Docker",
];

export const projects = [
  {
    name: "Zerøbyte Business",
    type: "Web app",
    shortDescription:
      "A modern business management SaaS for sales, inventory, staff, payments, and daily operations.",
    description:
      "Zerøbyte Business brings essential business tools together in one platform, helping small and growing businesses understand their operations and make better decisions. It includes dashboards, inventory management, sales tracking, staff management, receipts, financial insights, PWA support, and offline functionality.",
    role: "Full-Stack Developer & Project Lead",
    technologies: ["React", "TypeScript", "Supabase"],
    liveUrl:
      "https://codex-tech-foundation-x-zerobyte.github.io/zerobyte-business/",
    githubUrl: "",
    image: "",
    status: "Beta complete · Maintenance in progress",
  },
];

export const experience = [
  {
    organization: "CodeX Tech Foundation",
    role: "Founder and Full Stack Developer",
    start: "1 July 2026",
    end: "Present",
    description:
      "A technology-focused organization dedicated to building practical digital solutions, developing software products, and creating opportunities for people to learn, collaborate, and grow.",
    responsibilities: [
      "Product and technical leadership",
      "Team and project management",
      "Strategy and business development",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Node.js",
      "Go",
      "Docker",
      "GitHub",
      "Supabase",
    ],
  },
];

export const education = [
  {
    institution: "Caritas University, Enugu",
    course: "Computer Science",
    start: "2025",
    end: "2030",
    details: "",
  },
];
export const certifications: Array<{
  title: string;
  organization: string;
  date: string;
  url?: string;
  description?: string;
}> = [];
export const services = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "API Development",
  "Database Development",
  "Business Systems",
];

export const socialLinks: Link[] = [
  { label: "GitHub", href: "https://github.com/codextech-lab", icon: "github" },
  { label: "LinkedIn", href: "", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
