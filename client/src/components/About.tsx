import { Card } from "@/components/ui/card";
import { Shield, Cloud, Terminal, Monitor } from "lucide-react";

const expertise = [
  {
    icon: Shield,
    title: "Network Security",
    description: "Wireshark, IDS/IPS, EDR/XDR, Firewall, VPN",
  },
  {
    icon: Monitor,
    title: "SOC Operations",
    description: "Grafana, Zabbix, Opsgenie, Incident Response",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS, Azure, Cloudflare Tunneling",
  },
  {
    icon: Terminal,
    title: "Automation & Scripting",
    description: "Python, JavaScript, Shell Scripting",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-about-heading">
            About Me
          </h2>
          <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
            Passionate about cybersecurity and infrastructure monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-medium mb-4" data-testid="text-about-title">
              L1 Engineer & Cyber Security Professional
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4" data-testid="text-about-description">
              I am a dedicated L1 Engineer with expertise in infrastructure monitoring, incident response, 
              and security operations. Currently working at Parker Digital, I monitor application, network, 
              and security infrastructure using tools like Grafana, Zabbix, and Vector. I collaborate with 
              SOC teams to detect, contain, and remediate IT threats, ensuring timely incident response.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground" data-testid="text-about-commitment">
              With a Master's in Cyber Security from GTU and Microsoft SC-900 certification, I bring strong 
              foundations in network security, cloud computing (AWS, Azure), and automation. I've developed 
              Chrome extensions for real-time alerts, desktop applications for SOC ticket creation, and 
              implemented secure remote access solutions using Cloudflare Tunneling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-transform duration-300"
                  data-testid={`card-expertise-${index}`}
                >
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
