import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Service {
  title: string;
  description: string;
  icon: string;
  customHtml?: string;
}
@Component({
  selector: "app-skills",
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent implements OnInit {
  animatedLevels: { [key: string]: number } = {};

  skillCategories: SkillCategory[] = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "Angular", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "RxJS", level: 85 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "ASP.NET Core", level: 95 },
        { name: "C#", level: 95 },
        { name: ".NET Framework", level: 90 },
        { name: "Entity Framework Core", level: 90 },
        // { name: "Web API", level: 95 },
        { name: "RESTful APIs", level: 95 },
        { name: "SQL Server", level: 85 },
        { name: "LINQ", level: 90 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & Version Control", level: 95 },
        { name: "Azure DevOps", level: 75 },
        { name: "Visual Studio", level: 95 },
        // { name: "VS Code", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Docker", level: 60 },
        { name: "Azure Cloud", level: 70 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "JWT Authentication", level: 90 },
        { name: "SignalR (Real-time)", level: 80 },
        { name: "Performance Optimization", level: 85 },
        { name: "Database Design", level: 85 },
        { name: "API Integration", level: 90 },
      ],
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "React.js", level: 40 },
        { name: "Node.js", level: 35 },
        { name: "AI/ML Integration", level: 40 },
        // { name: "Python", level: 45 },
        { name: "Kubernetes", level: 30 },
      ],
    },
  ];

  services: Service[] = [
    {
      title: "Full-Stack Development",
      description:
        "Full-stack web applications using modern frameworks and technologies",
      icon: "🌐",
      customHtml: `<ul>
                    <li>✓ RESTful API development</li>
                    <li>✓ Responsive UI design</li>
                    <li>✓ Database architecture</li>
                  </ul>`
    },
    {
      title: "API Integration",
      description:
        "Seamless integration of third-party APIs and custom API development",
      icon: "🔗",
      customHtml: ` <ul>
      <li>✓ Payment gateways</li>
      <li>✓ Authentication systems</li>
      <li>✓ Real-time features</li>
    </ul>`
    },
    {
      title: "Software Solutions",
      description:
        "Custom software development tailored to your business needs",
      icon: "💻",
      customHtml: `<ul>
      <li>✓ CRM systems</li>
      <li>✓ Admin dashboards</li>
      <li>✓ E-commerce platforms</li>
    </ul>`
    },
    {
      title: "AI/ML Consulting",
      description:
        "Technical consulting and architecture planning for your projects",
      icon: "🎯",
      customHtml: ` <ul>
      <li>✓ OpenAI integration</li>
      <li>✓ Chatbots</li>
      <li>✓ Data analytics</li>
    </ul>`
    },
  ];
  ngOnInit() {
    // Animate skill bars
    setTimeout(() => {
      this.skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          this.animatedLevels[skill.name] = skill.level;
        });
      });
    }, 500);
  }
}
