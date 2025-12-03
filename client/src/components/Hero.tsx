import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import profileImage from "@/components/images/profile.png";

const roles = [
  "L1 Engineer",
  "Cyber Security Professional",
  "SOC Analyst",
  "Infrastructure Monitor",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-32 text-center">
        <div className="mb-8 inline-block">
          <img
            src={profileImage}
            alt="Dhaval Chavda"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-xl object-contain"
            data-testid="img-profile"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4" data-testid="text-name">
          Dhaval Chavda
        </h1>

        <div className="h-12 md:h-16 mb-6">
          <p className="text-xl md:text-3xl text-muted-foreground font-medium" data-testid="text-role">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-tagline">
          Monitoring infrastructure, securing networks, and automating SOC operations with modern tools
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="backdrop-blur-md"
            data-testid="button-contact"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            data-testid="button-download-cv"
          >
            <a href="/Dhaval_Chavda_CV.pdf" download="Dhaval_Chavda_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            data-testid="link-linkedin"
          >
            <a
              href="https://linkedin.com/in/dhaval-chavda-62669a225"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            data-testid="link-github"
          >
            <a
              href="https://github.com/Dhaval5252"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
