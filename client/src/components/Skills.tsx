import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Network Security",
    description: "Security monitoring and threat detection",
    technologies: ["Wireshark", "TCP/IP", "IDS/IPS", "EDR/XDR", "Proxy", "VPN", "Firewall", "SSH", "SSL/TLS"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Programming Languages",
    description: "Scripting and development languages",
    technologies: ["Python", "JavaScript", "Shell Scripting"],
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    category: "Cloud & Technology",
    description: "Cloud platforms and operating systems",
    technologies: ["AWS", "Azure", "Git", "Linux", "Windows"],
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    category: "Security Tools",
    description: "Monitoring and security platforms",
    technologies: ["Grafana", "Zabbix", "Opsgenie", "Microsoft Defender", "JIRA"],
    color: "bg-chart-4/10 text-chart-4",
  },
  {
    category: "Other Tools & Skills",
    description: "Automation and testing tools",
    technologies: ["Selenium", "Cloudflare", "Burp Suite", "Chrome Extensions"],
    color: "bg-chart-5/10 text-chart-5",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-skills-heading">
            Skills & Expertise
          </h2>
          <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
            Specialized in cybersecurity, network monitoring, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-transform duration-300"
              data-testid={`card-skill-${index}`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">{skill.category}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className={skill.color}
                    data-testid={`badge-tech-${index}-${techIndex}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
