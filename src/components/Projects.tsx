import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const webProjects = [
    {
      title: "Cross-Platform Booking Web App",
      description:
        "Collaborated with a digital agency to develop a full-stack booking web app for a hospitality startup. The platform enables users to browse properties, book dates, and make secure payments seamlessly. Features include JWT authentication, API rate limiting, and Stripe integration for transactions. Built with Node.js, Express, PostgreSQL, React, and Tailwind CSS. Optimized for mobile with an admin dashboard for property owners.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "Tailwind"],
      image: "/assets/images/crossplatform.png", 
      priceRange: "$1000 - $2500",
      duration: "1 - 3 months",
      industries: "Hospitality, Real Estate",
    },
    {
      title: "API + Base64 Integration for Client App",
      description:
        "Partnered with a software agency to integrate secure Base64 encoding and third-party APIs into a client’s internal dashboard. Implemented encoded document uploads, encrypted data transfer, and automated verification while maintaining backward compatibility. Optimized API handling to reduce failures by over 60% and added advanced error logging and fallback mechanisms for improved stability.",
      tags: ["JavaScript", "API Integration", "Base64", "Node.js", "Security"],
      image: "/assets/images/api-integration.jpg",
      priceRange: "$1000 - $2500",
      duration: "1 - 3 months",
      industries: "Fintech, SaaS",
    },
  ];

  const designProjects = [
    {
      title: "Corporate Event Program",
      description:
        "Multi-page program booklet design for a tech conference, featuring modern layouts, typography, and brand integration.",
      tags: ["Print Design", "InDesign", "Branding", "Typography"],
      image: "/assets/images/event-program.jpg",
    },
    {
      title: "Marketing Collateral Suite",
      description:
        "Complete brand identity package including brochures, business cards, and promotional materials for a startup.",
      tags: ["Graphic Design", "Illustrator", "Brand Identity", "Print"],
      image: "/assets/images/marketing-suite.jpg",
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
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Web Development
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {webProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <strong>Price range:</strong> {project.priceRange}
                    </p>
                    <p>
                      <strong>Project duration:</strong> {project.duration}
                    </p>
                    <p>
                      <strong>Industries:</strong> {project.industries}
                    </p>
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
                className="bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
