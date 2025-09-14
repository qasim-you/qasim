export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 20,
    slug: "nurturebuddy-ai",
    title: "NurtureBuddy Ai",
    category: "Full stack",
    shortDescription: "Build a Ai space agent for the space travel industry.",
    description: [
      "Built dynamic frontend interfaces for an emotion-aware AI chatbot. Optimized performance and responsiveness."
    ],
    features: [],
    technologies: ["Next.js", "MongoDB", "Gemini sdk", "Stripe"],
    coverImage: "/nurture.png",
    thumbnailImage: "/nurture.png",
    gallery: [],
    timeline: "1 month",
    role: "Full Stack",
    liveUrl: "https://nurturebuddy.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 12,
    slug: "aiviralbuzz",
    title: "Aiviralbuzz",
    category: "Full stack",
    shortDescription: "Startup project for imfluencers and content creater.",
    description: [
      "Built dynamic frontend interfaces for an emotion-aware AI chatbot. Optimized performance and responsiveness."
    ],
    features: [],
    technologies: ["Next.js", "Gemini sdk", ".Net Core", "Firebase", "Pinecone"],
    coverImage: "/aiiviralbuzz.png",
    thumbnailImage: "/aiiviralbuzz.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://aiviralbuzz.com/",
    githubUrl: "",
    relatedProjects: []
  },
   {
    id: 19,
    slug: "game-taken",
    title: "Game Taken",
    category: "Full stack",
    shortDescription: "Built a taken game  ",
    description: [
      "Built a dynamic game with the help of Ai "
    ],
    features: [],
    technologies: ["Next.js",],
    coverImage: "/game-ai.png",
    thumbnailImage: "/game-ai.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "/",
    githubUrl: "",
    relatedProjects: []
  },
   {
    id: 18,
    slug: "research-assistant",
    title: "Research Assistant",
    category: "Full stack",
    shortDescription: "Built a research assistant tool  ",
    description: [
      "Built a dynamic research assistant tool with the help of Ai "
    ],
    features: [],
    technologies: ["Next.js",],
    coverImage: "/research-ai.png",
    thumbnailImage: "/research-ai.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://research-assistant-psi.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 13,
    slug: "space-agent",
    title: "Space Ai Agent",
    category: "Full stack",
    shortDescription: "Build a Ai space agent for the space travel industry.",
    description: [
      "Built dynamic frontend interfaces for an emotion-aware AI chatbot. Optimized performance and responsiveness."
    ],
    features: [],
    technologies: ["Next.js", "Gemini sdk", "Langchain"],
    coverImage: "/space.jpg",
    thumbnailImage: "/space.jpg",
    gallery: [],
    timeline: "1 month",
    role: "Ai Developer",
    liveUrl: "https://ai-agents-space.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },
 
   {
    id: 14,
    slug: "optimizing-network",
    title: "Optimizing Network with Multi Agents",
    category: "Full stack",
    shortDescription: "Optimized the Networking and enerdgy system with Ai",
    description: [
      "We focused on London for PoC - cause it’s the most developed smart city with the network infrastracture. And from that point for development is great for One Replication Strategy The London Smart City Optimization project enhances urban infrastructure using AI, IoT, and cybersecurity."
    ],
    features: [],
    technologies: ["Next.js", "Gemini sdk", "Langchain"],
    coverImage: "/optimize.jpg",
    thumbnailImage: "/optimize.jpg",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://storage.googleapis.com/cognispace/index.html",
    githubUrl: "",
    relatedProjects: []
  },
   {
    id: 15,
    slug: "resume-ai",
    title: "Resumate Ai",
    category: "Full stack",
    shortDescription: "Build a resume with AI",
    description: [
      "Build your resume with the help of Ai"
    ],
    features: [],
    technologies: ["Next.js", "Groq Ai"],
    coverImage: "/resumate.png",
    thumbnailImage: "/resumate.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://resume-creaters.vercel.app/",
    githubUrl: "https://github.com/qasim-you/resum-creaters",
    relatedProjects: []
  },
  {
    id: 1,
    slug: "appointment-app",
    title: "Appointment App",
    category: "Web Application",
    shortDescription: "Manage doctor appointments efficiently using modern tech stack.",
    description: [
      "Developed with Next.js 14 and Prisma for managing doctor appointments."
    ],
    features: [],
    technologies: ["Next.js", "Prisma"],
    coverImage: "/appointment.png",
    thumbnailImage: "/appointment.png",
    gallery: [],
    timeline: "1 month",
    role: "Full Stack Developer",
    liveUrl: "https://example.com/appointment-app",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 2,
    slug: "recipe-app",
    title: "Recipe App",
    category: "Web Application",
    shortDescription: "Manage and share recipes with others through an intuitive interface.",
    description: [
      "Developed with React, TypeScript, and Redux Toolkit for managing and sharing recipes."
    ],
    features: [],
    technologies: ["React", "TypeScript", "Redux Toolkit"],
    coverImage: "/recipie.png",
    thumbnailImage: "/recipie.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://github.com/qasim-you/RECEPIE-APP",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 3,
    slug: "fake-news-detection",
    title: "Fake News Detection App",
    category: "Hackathon Project",
    shortDescription: "AI-powered platform for real-time news verification.",
    description: [
      "Developed during lablab.ai Hackathon using AI-powered algorithms for real-time news verification. Built with React, Node.js, and MongoDB."
    ],
    features: [],
    technologies: ["Next Js", "Gemini API", "Huging Face Model"],
    coverImage: "/fake.jpg",
    thumbnailImage: "/fake.jpg",
    gallery: [],
    timeline: "Hackathon (2024)",
    role: "Frontend Developer",
    liveUrl: "https://truth-guard-dusky.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 4,
    slug: "pd-research-app",
    title: "PD Research App",
    category: "Hackathon Project",
    shortDescription: "AI-based platform to facilitate research analysis.",
    description: [
      "Developed during lablab.ai Hackathon to facilitate research analysis using AI and data visualization techniques. Built with Python, React, and Firebase."
    ],
    features: [],
    technologies: ["Flask ", "Streamlit"],
    coverImage: "/gemin-hacathoni.jpeg",
    thumbnailImage: "/gemin-hacathoni.jpeg",
    gallery: [],
    timeline: "Hackathon (2024)",
    role: "Full Stack Developer",
    liveUrl: "https://gemini-ai-hackathon-m2a97jyjlwgk6ljzvz4g7n.streamlit.app/",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 5,
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "Portfolio",
    shortDescription: "Showcasing my projects and professional experience.",
    description: [
      "Developed with Next.js 14 and Accertinity for showcasing my projects and professional experience."
    ],
    features: [],
    technologies: ["Next.js", "Accertinity"],
    coverImage: "/portfolio.png",
    thumbnailImage: "/portfolio.png",
    gallery: [],
    timeline: "Ongoing",
    role: "Designer & Developer",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 6,
    slug: "avunja-platform",
    title: "Avunja Platform",
    category: "Frontend Project",
    shortDescription: "African marketplace frontend development.",
    description: [
      "This wasn't complete — I made updates to it in the real production version."
    ],
    features: [],
    technologies: ["React.js", "Next.js"],
    coverImage: "/avunja.png",
    thumbnailImage: "/avunja.png",
    gallery: [],
    timeline: "2 months",
    role: "Frontend Developer",
    liveUrl: "",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 7,
    slug: "bitmason",
    title: "Bitmason",
    category: "Frontend Project",
    shortDescription: "Decentralized finance platform frontend development.",
    description: [
      "Worked on a decentralized finance platform. Built reusable React components and managed state using Context API."
    ],
    features: [],
    technologies: ["React.js", "Next.js"],
    coverImage: "/bitmason-cover.png",
    thumbnailImage: "/bitmason-thumb.png",
    gallery: [],
    timeline: "2 months",
    role: "Frontend Developer",
    liveUrl: "",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 8,
    slug: "feelix-ai",
    title: "Feelix AI",
    category: "Frontend Project",
    shortDescription: "Emotion-aware AI chatbot frontend interfaces.",
    description: [
      "Built dynamic frontend interfaces for an emotion-aware AI chatbot. Optimized performance and responsiveness."
    ],
    features: [],
    technologies: ["React.js", "Next.js"],
    coverImage: "/feelix.png",
    thumbnailImage: "/feelix.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://beta-feelix-ai.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 10,
    slug: "health-ai",
    title: "Healthcare AI",
    category: "Full stack",
    shortDescription: "Emotion-aware AI chatbot frontend interfaces.",
    description: [
      "Built dynamic frontend interfaces for an emotion-aware AI chatbot. Optimized performance and responsiveness."
    ],
    features: [],
    technologies: ["React.js", "Next.js", "Gemini sdk"],
    coverImage: "/healthcare.jpg",
    thumbnailImage: "/healthcare.jpg",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://ai-health-ten.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 11,
    slug: "edunet-ai",
    title: "EduNet AI",
    category: "Full stack",
    shortDescription: "Emotion-aware AI chatbot frontend interfaces.",
    description: [
      "Built dynamic frontend interfaces for an emotion-aware AI chatbot. Optimized performance and responsiveness."
    ],
    features: [],
    technologies: ["React.js", "Next.js", "Gemini sdk"],
    coverImage: "/edunet.jpg",
    thumbnailImage: "/edunet.jpg",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://education-app-livid.vercel.app/",
    githubUrl: "",
    relatedProjects: []
  },

]


export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
