import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
            Let's discuss cybersecurity and infrastructure solutions
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-medium mb-6 text-center">Contact Information</h3>

          <div className="space-y-4 mb-8">
            <div className="p-4 glass-card gradient-border rounded-lg flex items-center gap-4 hover-elevate transition-all" data-testid="card-email">
              <div className="p-3 rounded-md bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:dhavalchavda3158@gmail.com"
                  className="font-medium hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  dhavalchavda3158@gmail.com
                </a>
              </div>
            </div>

            <div className="p-4 glass-card gradient-border rounded-lg flex items-center gap-4 hover-elevate transition-all" data-testid="card-phone">
              <div className="p-3 rounded-md bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+919974316319"
                  className="font-medium hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  +91 9974316319
                </a>
              </div>
            </div>

            <div className="p-4 glass-card gradient-border rounded-lg flex items-center gap-4 hover-elevate transition-all" data-testid="card-location">
              <div className="p-3 rounded-md bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium" data-testid="text-location">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
