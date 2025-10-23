import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroBg from "/assets/images/hero-bg.jpg";
import profileImg from "/assets/images/ryann.jpeg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-primary/20">
            <AvatarImage src={profileImg} alt="Ryan Bennett" />
            <AvatarFallback>RB</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ryan Bennett
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Design, Development and Debugging Done Right
          </p>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Professional UI/UX Designer & Web Developer with 10+ years of global experience
          </p>
          <div className="mt-8 flex gap-6 justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
             📩 Email: ryanbennett.tech@gmail.com, 🔗 Fiverr Account: ryantechstack
            </span>
          </div>
          <div className="mt-8 flex gap-6 justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              📍 United States
            </span>
            <span className="flex items-center gap-2">
              🌐 English, Spanish, French
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
