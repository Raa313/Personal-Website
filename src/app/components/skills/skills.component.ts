import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 90 },
        { name: 'Rust', level: 85 },
        { name: 'C/C++', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'Scheme', level: 75 },
        { name: 'Verilog', level: 70 },
        { name: 'Assembly', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'OpenGL', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Eclipse', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      title: 'Data Science & ML',
      icon: '📊',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'TensorFlow', level: 75 }
      ]
    },
    {
      title: 'Systems & Platforms',
      icon: '⚙️',
      skills: [
        { name: 'Linux/Unix', level: 85 },
        { name: 'Windows', level: 90 },
        { name: 'Embedded Systems', level: 75 }
      ]
    }
  ];
}