// Static data for portfolio sections
// Susanta Gorai — Real CV Data

export const personalInfo = {
  name: "Susanta Gorai",
  role: "Full-Stack Developer",
  tagline: "Building elegant digital experiences with modern web technologies",
  introduction: "Passionate full-stack developer with expertise in building responsive and user-friendly web applications. Skilled in React, Node.js, PHP, and Python with a strong foundation in Data Structures & Algorithms. I love turning complex problems into simple, beautiful solutions.",
  email: "susantagorai332@gmail.com",
  phone: "+91 9064602527",
  linkedin: "https://www.linkedin.com/in/susantagorai/",
  github: "https://github.com/susantagorai003",
  location: "India",
  resumeLink: "/Final CV 3.pdf",
};

export const aboutData = {
  description: `I am a dedicated Full-Stack Developer pursuing B.Tech in Computer Science & Engineering at Lovely Professional University, Punjab. I have hands-on experience with frontend frameworks like React.js, backend technologies like Node.js, Express, and PHP, and databases like MySQL and MongoDB.

My journey in software development started with curiosity-driven projects and has evolved into building real-world applications such as an Event Management System and an AI-Based Image Enhancer. I believe in writing clean, maintainable code and following best practices in software engineering.

When I'm not coding, you'll find me exploring new technologies, practicing Data Structures and Algorithms, or participating in hackathons and technical workshops.`,
  interests: ["Web Development", "AI/ML", "Data Structures & Algorithms", "Competitive Programming", "System Design"],
  goals: "To become a proficient software engineer who builds impactful products that solve real-world problems, while continuously learning and growing in the ever-evolving tech landscape.",
};

export const technicalSkills = [
  { name: "C", level: 75, category: "language", icon: "SiC" },
  { name: "C++", level: 78, category: "language", icon: "SiCplusplus" },
  { name: "Java", level: 80, category: "language", icon: "SiOpenjdk" },
  { name: "JavaScript", level: 85, category: "language", icon: "SiJavascript" },
  { name: "PHP", level: 80, category: "language", icon: "SiPhp" },
  { name: "Python", level: 75, category: "language", icon: "SiPython" },
  { name: "HTML5", level: 92, category: "framework", icon: "SiHtml5" },
  { name: "CSS3", level: 88, category: "framework", icon: "SiCss3" },
  { name: "React.js", level: 85, category: "framework", icon: "SiReact" },
  { name: "Node.js", level: 82, category: "framework", icon: "SiNodedotjs" },
  { name: "Express.js", level: 80, category: "framework", icon: "SiExpress" },
  { name: "Tailwind CSS", level: 85, category: "framework", icon: "SiTailwindcss" },
  { name: "MySQL", level: 80, category: "tool", icon: "SiMysql" },
  { name: "MongoDB", level: 78, category: "tool", icon: "SiMongodb" },
  { name: "Figma", level: 70, category: "tool", icon: "SiFigma" },
  { name: "Git", level: 82, category: "tool", icon: "SiGit" },
];

export const softSkills = [
  { name: "Problem Solving", level: 92 },
  { name: "Teamwork", level: 90 },
  { name: "Project Management", level: 85 },
  { name: "Adaptability", level: 90 },
  { name: "Communication", level: 88 },
  { name: "Time Management", level: 85 },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    year: "Since August 2023",
    grade: "CGPA: 7.96",
    description: "Pursuing full-stack web development, data structures, algorithms, and software engineering. Active participant in hackathons and technical workshops.",
    order: 1,
  },
  {
    degree: "Intermediate (XII)",
    institution: "Central Public School, Jharkhand",
    year: "April 2021 – March 2023",
    grade: "Percentage: 60.6%",
    description: "Completed higher secondary education with a focus on Science stream.",
    order: 2,
  },
  {
    degree: "Matriculation (X)",
    institution: "S.T. Xavier's School, West Bengal",
    year: "April 2020 – March 2021",
    grade: "Percentage: 85.8%",
    description: "Completed secondary education with distinction.",
    order: 3,
  },
];

export const extracurricularData = [
  {
    title: "LPU X Web Hackathon",
    organization: "Lovely Professional University",
    period: "March 2025",
    description: "Participated in a competitive LPU X Web Hackathon, building innovative web solutions under time constraints.",
    icon: "trophy",
  },
  {
    title: "Seminar on Career Enhancement",
    organization: "Lovely Professional University",
    period: "September 2024",
    description: "Attended an expert-led Seminar on Career Enhancement, gaining insights into industry trends and career growth strategies.",
    icon: "heart",
  },
  {
    title: "3 Day Web Development Bootcamp",
    organization: "Lovely Professional University",
    period: "March 2024",
    description: "Completed an intensive 3-day Web Development Bootcamp, developing practical web development skills and building hands-on projects.",
    icon: "code",
  },
];

export const defaultProjects = [
  {
    _id: "p1",
    title: "Event Management System",
    description: "Built an interactive Event Management System enabling administrators to announce, coordinate, and supervise multiple events. Designed a responsive UI with HTML and Tailwind CSS, developed robust backend logic in PHP with optimized MySQL schemas, and streamlined database performance for high-volume event registrations.",
    technologies: ["HTML", "Tailwind CSS", "CSS", "PHP", "MySQL"],
    image: "/projects/event-management-system.png",
    githubLink: "https://github.com/susantagorai003/Backend",
    liveLink: "",
  },
  {
    _id: "p2",
    title: "AI-Based Image Enhancer",
    description: "Architected and launched an AI-powered image enhancement solution that performs automatic sharpening, restoration, and quality improvement through the PicWish API. Created a clean React interface with real-time previews, orchestrated API communication using Axios, and conducted thorough validation and performance tuning.",
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Axios", "PicWish API"],
    image: "/projects/ai-image-enhancer.png",
    githubLink: "https://github.com/susantagorai003",
    liveLink: "",
  },
  {
    _id: "p3",
    title: "AR-Based Anatomy Platform",
    description: "Developed an immersive AR-based anatomy learning platform that enables users to explore 3D human body systems in augmented reality. Features include interactive 3D anatomy models, an anatomy library covering 12+ body systems (skeletal, muscular, circulatory, nervous, respiratory, digestive), AR mode for placing models in real-world environments, quizzes for knowledge assessment, and a rich theory learning section.",
    technologies: ["React.js", "Three.js", "AR.js", "WebXR", "Node.js", "MongoDB"],
    image: "/projects/ar-anatomy-platform.png",
    githubLink: "https://github.com/susantagorai003",
    liveLink: "",
  },
];

export const defaultCertificates = [
  {
    _id: "c1",
    title: "Master in Generative AI & Generative AI Tools",
    issuer: "Infosys Springboard",
    date: "August 2025",
    image: "/certificates/master-generative-ai.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c5",
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    date: "August 2025",
    image: "/certificates/chatgpt4-prompt-engineering.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c2",
    title: "Java Programming — 72 Hours",
    issuer: "iamneo, LPU",
    date: "May 2025",
    image: "/certificates/java-programming.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c3",
    title: "Data Structure & Algorithms — 72 Hours",
    issuer: "iamneo, LPU",
    date: "December 2024",
    image: "/certificates/dsa-72hours.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c4",
    title: "Object Oriented Programming — 72 Hours",
    issuer: "iamneo, LPU",
    date: "December 2024",
    image: "/certificates/oop-72hours.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c6",
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys Springboard",
    date: "August 2025",
    image: "/certificates/build-genai-nocode.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c7",
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL (IIIT Hyderabad & IIT Madras)",
    date: "April 2025",
    image: "/certificates/privacy-security-social-media.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
  {
    _id: "c8",
    title: "Basics of Data Structures and Algorithms",
    issuer: "Lovely Professional University (Centre for Professional Enhancement)",
    date: "July 2025",
    image: "/certificates/basics-dsa.png",
    verificationLink: "https://drive.google.com/drive/folders/1YvdDZspqzpGhHEasd6tQ-cc5rzHHP1X9",
  },
];

export const defaultAchievements = [
  {
    _id: "a1",
    platform: "GitHub",
    description: "Active developer with multiple project repositories including Event Management System and AI-Based Image Enhancer.",
    problemsSolved: 0,
    rating: "Active Contributor",
    badge: "Developer",
    profileLink: "https://github.com/susantagorai003",
    icon: "github",
  },
  {
    _id: "a2",
    platform: "DSA Training — LPU",
    description: "Completed a rigorous summer training program on Data Structures and Algorithms, practicing sorting, searching, recursion, complexity evaluation, and working with arrays, linked lists, stacks, queues, trees, and graphs.",
    problemsSolved: 0,
    rating: "June – July 2025",
    badge: "Certified",
    profileLink: "",
    icon: "leetcode",
  },
  {
    _id: "a3",
    platform: "LeetCode",
    description: "Solved 250+ problems on LeetCode, covering arrays, strings, dynamic programming, trees, graphs, and more. Consistently practicing to strengthen problem-solving and algorithmic thinking.",
    problemsSolved: 250,
    rating: "250+ Problems",
    badge: "Problem Solver",
    profileLink: "https://leetcode.com/u/susanta_sp/",
    icon: "leetcode",
  },
  {
    _id: "a4",
    platform: "GeeksForGeeks",
    description: "Solved 100 problems on GeeksForGeeks, focusing on data structures, algorithms, and competitive programming fundamentals.",
    problemsSolved: 100,
    rating: "100 Problems",
    badge: "Coder",
    profileLink: "https://www.geeksforgeeks.org/profile/susanta602527",
    icon: "gfg",
  },
  {
    _id: "a5",
    platform: "HackerRank",
    description: "Solved 200+ problems on HackerRank across domains including algorithms, data structures, Java, and problem solving.",
    problemsSolved: 200,
    rating: "200+ Problems",
    badge: "Problem Solver",
    profileLink: "https://www.hackerrank.com/profile/Susanta60",
    icon: "hackerrank",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Activities", href: "#extracurricular" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
