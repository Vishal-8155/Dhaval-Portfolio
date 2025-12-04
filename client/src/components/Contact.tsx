import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground font-medium px-4">
            Let's discuss cybersecurity and infrastructure solutions
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-center">Contact Information</h3>

          <div className="space-y-4 mb-8">
            <div className="p-3 sm:p-4 glass-card gradient-border rounded-lg flex items-center gap-3 sm:gap-4 hover-elevate transition-all" data-testid="card-email">
              <div className="p-2 sm:p-3 rounded-md bg-primary/10 shrink-0">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:dhavalchavda3158@gmail.com"
                  className="font-medium hover:text-primary transition-colors text-sm sm:text-base truncate block"
                  data-testid="link-email"
                >
                  dhavalchavda3158@gmail.com
                </a>
              </div>
            </div>

            <div className="p-3 sm:p-4 glass-card gradient-border rounded-lg flex items-center gap-3 sm:gap-4 hover-elevate transition-all" data-testid="card-phone">
              <div className="p-2 sm:p-3 rounded-md bg-primary/10 shrink-0">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+919724709900"
                  className="font-medium hover:text-primary transition-colors text-sm sm:text-base"
                  data-testid="link-phone"
                >
                  +91 9724709900
                </a>
              </div>
            </div>

            <div className="p-3 sm:p-4 glass-card gradient-border rounded-lg flex items-center gap-3 sm:gap-4 hover-elevate transition-all" data-testid="card-location">
              <div className="p-2 sm:p-3 rounded-md bg-primary/10 shrink-0">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-sm sm:text-base" data-testid="text-location">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
