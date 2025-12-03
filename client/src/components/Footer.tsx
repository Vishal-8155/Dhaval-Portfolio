import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3" data-testid="text-footer-brand">Dhaval Chavda</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Cybersecurity Professional & L1 Engineer
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/dhaval-chavda-62669a225"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover-elevate active-elevate-2"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Dhaval5252"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-background hover-elevate active-elevate-2"
                aria-label="GitHub"
                data-testid="link-footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:dhavalchavda3158@gmail.com"
                className="p-2 rounded-md bg-background hover-elevate active-elevate-2"
                aria-label="Email"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Dhaval Chavda. Available for new opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
