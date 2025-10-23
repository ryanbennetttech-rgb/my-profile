import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Bug } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating modern interfaces and seamless user experiences that delight users and drive engagement.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive websites and web applications with cutting-edge technologies and best practices.",
    },
    {
      icon: Bug,
      title: "Debugging & Support",
      description: "Fixing bugs, debugging code, handling Base64 issues, and supporting AI-driven features and MVP builds.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a Professional UI/UX Designer and Web Developer with 10+ years of global experience 
            creating modern interfaces, responsive websites, and seamless user experiences.
          </p>
          <p className="text-lg text-foreground/80 mt-4 max-w-3xl mx-auto">
            Alongside design and frontend development, I also work on the technical side — fixing bugs, 
            debugging code, building apps on Replit, handling Base64 issues, and supporting AI-driven 
            features and MVP builds. I bridge design, development, and problem-solving so clients don't 
            have to juggle multiple people for one project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg border-border group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
