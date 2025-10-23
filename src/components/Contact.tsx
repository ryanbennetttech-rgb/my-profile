import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            If you're launching something new, let's make it scale fast
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-foreground/80 text-lg">
                  Ready to bring your project to life? I'm here to help with design, development, 
                  and everything in between.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="hero" size="lg" className="group">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact via Email
                  </Button>
                  <Button variant="outline" size="lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Message on Fiverr
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Availability</h3>
                  <p className="text-sm text-muted-foreground">Open to new projects</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Time Zone</h3>
                  <p className="text-sm text-muted-foreground">US Time Zones</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
