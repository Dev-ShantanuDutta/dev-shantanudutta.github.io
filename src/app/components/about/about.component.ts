import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  offerings = [
    { key: "Enterprise ASP.NET Core Applications", description: "Building scalable backend APIs with 99.9% uptime and sub-200ms response times"},
    { key: "Modern Angular Frontends", description: "Creating responsive, real-time web applications with TypeScript and RxJS"},
    { key: "Performance Optimization", description: "Reducing API response times by 40% through database tuning and caching strategies"},
    { key: "Full-Stack Solutions", description: "End-to-end development from database design to cloud deployment on Azure"},
    { key: "AI/ML Integration (New!)", description: "Adding intelligent features using OpenAI API and machine learning models"},
  ];

  stats = [
    { value: "3+", label: "Years Experience", color: "text-blue-600" },
    { value: "10+", label: "Projects Delivered", color: "text-blue-600" },
    { value: "40%", label: "Performance Improvement", color: "text-blue-600" },
    { value: "98.9%", label: "UpTime Achievement", color: "text-blue-600" },
    { value: "5,000+", label: "Users Served", color: "text-purple-600" },
  ];
}
