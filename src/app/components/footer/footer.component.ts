import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Clock, Github, Linkedin, LucideAngularModule, Mail, MapPin } from "lucide-angular";

@Component({
  selector: "app-footer",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
    linkedinIcon = Linkedin;
    githubIcon = Github;
    mailIcon = Mail;
    mapPinIcon = MapPin;
    clockIcon = Clock;
    myEmailAddress = "shantanudutta07@gmail.com";

  navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
