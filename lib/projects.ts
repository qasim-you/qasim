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
    coverImage: "/appointment-app-cover.png",
    thumbnailImage: "/appointment-app-thumb.png",
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
    coverImage: "/recipe-app-cover.png",
    thumbnailImage: "/recipe-app-thumb.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "https://example.com/recipe-app",
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
    technologies: ["React", "Node.js", "MongoDB"],
    coverImage: "/fake-news-detection-cover.png",
    thumbnailImage: "/fake-news-detection-thumb.png",
    gallery: [],
    timeline: "Hackathon (2024)",
    role: "Frontend Developer",
    liveUrl: "https://example.com/fake-news-detection",
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
    technologies: ["Python", "React", "Firebase"],
    coverImage: "/pd-research-cover.png",
    thumbnailImage: "/pd-research-thumb.png",
    gallery: [],
    timeline: "Hackathon (2024)",
    role: "Full Stack Developer",
    liveUrl: "https://example.com/pd-research",
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
    coverImage: "/portfolio-cover.png",
    thumbnailImage: "/portfolio-thumb.png",
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
    title: "AVunja Platform",
    category: "Frontend Project",
    shortDescription: "African marketplace frontend development.",
    description: [
      "Contributed to the frontend development of a scalable African marketplace platform. Implemented UI/UX and integrated backend APIs."
    ],
    features: [],
    technologies: ["React.js", "Next.js"],
    coverImage: "/avunja-cover.png",
    thumbnailImage: "/avunja-thumb.png",
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
    coverImage: "/feelix-cover.png",
    thumbnailImage: "/feelix-thumb.png",
    gallery: [],
    timeline: "1 month",
    role: "Frontend Developer",
    liveUrl: "",
    githubUrl: "",
    relatedProjects: []
  },
  {
    id: 9,
    slug: "smartguy-edtech",
    title: "SmartGuy",
    category: "Frontend Project",
    shortDescription: "EdTech platform with interactive learning modules.",
    description: [
      "Worked on an edtech platform. Developed interactive frontend pages and dashboards for student learning modules."
    ],
    features: [],
    technologies: ["React.js", "Next.js"],
    coverImage: "/smartguy-cover.png",
    thumbnailImage: "/smartguy-thumb.png",
    gallery: [],
    timeline: "2 months",
    role: "Frontend Developer",
    liveUrl: "",
    githubUrl: "",
    relatedProjects: []
  }
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
