import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  // Placeholder for skills - user will add their actual skills
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      category: "Backend & Tools",
      skills: ["Node.js", "Python", "AWS", "Docker", "Git"],
    },
    {
      category: "Design",
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Responsive Design"],
    },
    {
      category: "Other",
      skills: ["AI Integration", "Debugging", "Replit", "MVP Development", "Base64 Handling"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack & Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit covering design, development, and technical problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-primary/10 hover:bg-primary/20 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
