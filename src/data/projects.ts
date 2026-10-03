export interface ProjectData { name: string; desc: string; tech: string[]; banner: string; description: string[]; github?: string; live?: string }
export const featuredProjects: ProjectData[] = [
  { name: 'CoLearn', banner: '/images/projects/colearn.svg', desc: 'A unified collaborative learning platform bringing real-time chat, secure file sharing, shared coding, and AI-powered assistance into one workspace for student teams.',
    tech: ['React (Vite)', 'Node.js', 'Express', 'Socket.IO', 'Supabase', 'Groq API', 'Mistral AI'],
    description: [
      'Engineered a full-stack collaborative workspace unifying real-time chat, secure file sharing, collaborative coding, and AI-powered assistance, eliminating tool-switching friction for student teams.',
      'Implemented a real-time shared coding environment using Socket.IO, enabling simultaneous editing and synchronization across connected screens.',
      'Built a pluggable AI integration layer supporting Groq and Mistral APIs, allowing users to bring their own API keys and switch models.',
      'Architected group workspaces as centralized collaboration hubs, linking live discussions, file storage, and coding sessions.',
    ] },
  { name: 'PathPilot', banner: '/images/projects/pathpilot.svg', desc: 'An AI-assisted career guidance platform using Retrieval-Augmented Generation to deliver personalized recommendations, skill-gap analysis, and actionable learning roadmaps.',
    tech: ['Python', 'React', 'RAG', 'LLM Integration', 'Vector Database'],
    description: [
      'Architected an AI-powered career guidance system using Retrieval-Augmented Generation, integrating an LLM with a vector database for accurate, personalized responses.',
      'Designed a skill-gap analysis engine mapping user profiles against curated learning roadmaps to generate structured career recommendations.',
      'Evaluated and iteratively refined AI-generated outputs for accuracy, relevance, and logical soundness.',
      'Curated and structured retrieval source data to improve response relevance and reduce hallucination across domain-specific queries.',
    ] },
];
export const allProjects = featuredProjects;
