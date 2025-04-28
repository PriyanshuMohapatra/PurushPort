
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface Project {
  title: string;
  period: string;
  description: string[];
  githubUrl?: string;
  image?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "TextVista – An Intelligent NLP Desktop Solution | LPU",
      period: "Mar' 25 – Apr' 25",
      description: [
        "Built a real-time desktop application offering three advanced NLP features: sentiment detection, entity extraction, and intelligent text rephrasing.",
        "Integrated secure user authentication with password protection and duplicate email detection to maintain data privacy.",
        "Enhanced the user experience by 70% with an intuitive Tkinter interface, providing effortless transitions between login and signup screens.",
        "Achieved a 40% improvement in NLP processing speed, replacing traditional manual/script methods with instant, one-click operations for maximum efficiency."
      ],
      githubUrl: "https://github.com/purushothamkotha963/project",
      image: "/lovable-uploads/e3564950-90cc-49ce-b549-baa325f2c604.png"
    },
    {
      title: "FitTrack – Gym Management System | LPU",
      period: "Feb' 23 – Apr' 23",
      description: [
        "Designed and developed a C-based console application to efficiently manage gym memberships, trainer assignments, and workout schedules.",
        "Implemented user authentication, membership registration, and data validation to ensure secure and accurate handling of member information.",
        "Streamlined gym operations by automating member check-ins, subscription tracking, and plan updates, reducing manual workload by 50%.",
        "Optimized system performance with structured programming practices, achieving quick data access and minimal system response times."
      ],
      githubUrl: "https://github.com/purushothamkotha963/c_project",
      image: "/Prj.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="project-card">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.period}</CardDescription>
      </CardHeader>
      <CardContent>
        {project.image && (
          <AspectRatio ratio={16/9} className="mb-4">
            <img 
              src={project.image} 
              alt={project.title}
              className="rounded-md object-cover w-full h-full"
            />
          </AspectRatio>
        )}
        <ul className="list-disc pl-5 space-y-2">
          {project.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
