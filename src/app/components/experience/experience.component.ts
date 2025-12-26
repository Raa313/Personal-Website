import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public experiences: Experience[] = [
    {
      title: 'Government Developer',
      company: 'Washoe County',
      location: 'Reno, Nevada',
      period: 'Summer 2024',
      type: 'Full-Time',
      description: 'Led full-stack development initiatives to modernize government systems and improve operational efficiency.',
      responsibilities: [
        'Designed and developed a full-stack booking platform to streamline inmate intake processes',
        'Simplified indigent status cataloging, reducing manual data entry',
        'Migrated login system to Microsoft account synchronization',
        'Implemented group-based security protocols for enhanced system security',
        'Collaborated directly with government stakeholders to gather requirements and deliver on deadlines'
      ],
      icon: '💼'
    },
    {
      title: 'Government IT Intern',
      company: 'Washoe County',
      location: 'Reno, Nevada',
      period: 'Summer 2023',
      type: 'Internship',
      description: 'Provided comprehensive IT support and gained hands-on experience with enterprise-level systems and cybersecurity.',
      responsibilities: [
        'Provided IT support across 1000+ users, resolving hardware/software issues',
        'Assisted in network infrastructure maintenance and cybersecurity monitoring for critical systems',
        'Gained hands-on experience with troubleshooting, system upgrades, and secure configuration',
        'Monitored and maintained security protocols for government systems',
        'Documented technical procedures and support workflows'
      ],
      icon: '🔧'
    }
  ];

  public education = {
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Minor in Economics',
    school: 'Rose-Hulman Institute of Technology',
    location: 'Terre Haute, IN',
    graduation: 'May 2025',
    icon: '🎓',
    highlights: [
      'Active member of RoboMasters Robotics Team - Controls Subgroup',
      'Completed advanced coursework in Systems Programming, Computer Architecture, and Machine Learning',
      'Collaborated on multiple team-based projects using Agile/Scrum and XP methodologies'
    ]
  };
}