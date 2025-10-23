import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Modern admin dashboard with data visualization, user management, and real-time analytics. Built with Next.js and TypeScript.",
      tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
      link: "#",
      github: "#",
    },
  ];

  const designProjects = [
    {
      title: "Corporate Event Program",
      description: "Multi-page program booklet design for a tech conference, featuring modern layouts, typography, and brand integration.",
      tags: ["Print Design", "InDesign", "Branding", "Typography"],
      link: "#",
    },
    {
      title: "Marketing Collateral Suite",
      description: "Complete brand identity package including brochures, business cards, and promotional materials for a startup.",
      tags: ["Graphic Design", "Illustrator", "Brand Identity", "Print"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work spanning design, development, and problem-solving
          </p>
        </div>

        {/* Web Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Web Development</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {webProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Design Work</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {designProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Portfolio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
