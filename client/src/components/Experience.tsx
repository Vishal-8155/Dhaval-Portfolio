import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "L1 Engineer",
    company: "Parker Digital",
    period: "July 2024 – Present",
    location: "Ahmedabad, Gujarat",
    type: "Current Role",
    logo: null,
    achievements: [
      "Monitored infrastructure (application, network, security) using Grafana, Zabbix, and Vector tool. Utilized Opsgenie for alerting and created tickets as per procedures, escalating to appropriate teams.",
      "Collaborated with SOC team members to detect, contain, and remediate IT threats, ensuring timely incident response and mitigation.",
      "Developed a Chrome extension that provides real-time alerts for new tickets in the Global Communication Center, enabling proactive monitoring and preventing SLA breaches.",
      "Developed a Desktop application that streamlines SOC ticket creation in JIRA, reducing ticket creation time to under 5 seconds and minimizing errors.",
      "Built a custom JavaScript solution for Grafana IRM OnCall to export alert data in .CSV format, addressing the platform's lack of built-in export functionality.",
      "Implemented secure remote access for Kasm, a web-based workspace, by setting up Cloudflare Tunneling, ensuring controlled and secure access from remote locations.",
      "Proactively contributed to automation initiatives and service improvement projects, driving efficiency, reducing manual effort, and enhancing overall operational performance.",
    ],
  },
];

const education = [
  {
    degree: "M.E. in Cyber Security (9.22 CGPA)",
    institution: "GTU - Graduate School of Engineering and Technology",
    period: "Sep 2023 – June 2025",
    type: "Completed",
  },
  {
    degree: "B.E. in Computer Science (8.46 CGPA)",
    institution: "Gujarat Technological University",
    period: "Aug 2019 – June 2023",
    type: "Completed",
  },
];

const certifications = [
  {
    title: "Microsoft SC-900",
    issuer: "Security, Compliance, and Identity Fundamentals - Aug 2024",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-experience-heading">
            Work Experience
          </h2>
          <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
            My professional journey in cybersecurity and infrastructure monitoring
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" data-testid={`experience-${index}`}>
                <div className="hidden md:block absolute left-8 top-6 w-4 h-4 -ml-[7px] rounded-full bg-primary border-4 border-background"></div>

                <Card className="md:ml-20 p-6 hover-elevate transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium mb-1" data-testid={`text-job-title-${index}`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2" data-testid={`text-company-${index}`}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" data-testid={`badge-type-${index}`}>
                        {exp.type}
                      </Badge>
                      <Badge variant="outline" className="gap-1" data-testid={`badge-period-${index}`}>
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="gap-1" data-testid={`badge-location-${index}`}>
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex gap-2 text-sm text-muted-foreground"
                          data-testid={`text-achievement-${index}-${achIndex}`}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover-elevate min-h-[140px] flex flex-col justify-between">
                  <div>
                    <h4 className="font-medium mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                    <Badge variant="secondary">{edu.type}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover-elevate min-h-[140px] flex flex-col justify-center">
                  <h4 className="font-medium mb-1">{cert.title}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
