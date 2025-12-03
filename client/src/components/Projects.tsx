import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Shield, Code } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categories = ["All", "Security", "Web Development"];

const projects = [
  {
    title: "Django Chatbot - Defensive Coding",
    category: "Security",
    description: "Developed a secure Django-based chat application with focus on defensive coding practices. Implemented end-to-end encryption and tested security using tools like Burp Suite. Strengthened user authentication with rigorous validation processes, conducted OWASP Top 10 assessments to address vulnerabilities, and implemented robust data transmission practices for user privacy and confidentiality.",
    technologies: ["Python", "Django", "Burp Suite", "OWASP", "Encryption", "Security Testing"],
    link: "#",
    icon: Shield,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    title: "Food Delivery Website",
    category: "Web Development",
    description: "Built a full-stack food delivery website with user module using ReactJs for the frontend, NodeJs for backend services, and MongoDB for data management. Implemented features for browsing restaurants, ordering food, and managing user accounts.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    link: "#",
    icon: Code,
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
            Building secure and innovative solutions with modern technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden hover-elevate transition-all duration-300 group w-full md:w-[calc(50%-12px)] max-w-md"
                data-testid={`card-project-${index}`}
              >
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border-0"
                        data-testid={`badge-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className="text-xs bg-muted text-muted-foreground border-0">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => setSelectedProject(project)}
                    data-testid={`button-view-details-${index}`}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent 
          className="max-w-lg p-0 gap-0 overflow-hidden bg-[#1a1a2e] border-primary/20" 
          data-testid="dialog-project-details"
          aria-describedby="project-description"
        >
          {selectedProject && (
            <div className="flex flex-col">
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-primary/30 via-primary/15 to-primary/5 p-6 pb-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold" data-testid="text-modal-title">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wider flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary rounded"></span>
                    About Project
                  </h4>
                  <p id="project-description" className="text-sm leading-relaxed text-muted-foreground" data-testid="text-modal-description">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wider flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary rounded"></span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        className="text-xs font-medium bg-primary/20 text-white hover:bg-primary/30 border border-primary/30"
                        data-testid={`badge-modal-tech-${index}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedProject.link && selectedProject.link !== "#" && (
                  <div className="pt-2">
                    <Button
                      className="w-full"
                      size="lg"
                      asChild
                      data-testid="button-modal-live-link"
                    >
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Site
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
