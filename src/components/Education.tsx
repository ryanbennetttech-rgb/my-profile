import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Ph.D Degree",
    field: "Computer Science",
    institution: "University of California",
    year: "Graduated 2013",
  };

  const certifications = [
    {
      title: "Google Winner – Google Hash Code Regional Round",
      year: "2020",
      issuer: "Google",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      year: "2022",
      issuer: "Meta",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      year: "2019",
      issuer: "Amazon Web Services",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.field}</p>
                <p className="text-foreground/80 mt-2">{education.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{education.year}</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-secondary pl-4">
                  <h3 className="font-semibold text-sm">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
