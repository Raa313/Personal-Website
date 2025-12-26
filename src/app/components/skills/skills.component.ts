import { Component } from '@angular/core';

interface Skill {
  name: string;
  category?: string;
}

interface SkillLevel {
  level: string;
  description: string;
  color: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public skillLevels: SkillLevel[] = [
    {
      level: 'Expert',
      description: 'Deep understanding and extensive hands-on experience',
      color: '(255,255,255,0.04)',
      icon: '🏆',
      skills: [
        { name: 'Java', category: 'Language' },
        { name: 'Python', category: 'Language' },
        { name: 'Git', category: 'Tool' },
        { name: 'VS Code', category: 'Tool' },
        { name: 'Docker', category: 'Tool' },
        { name: 'Problem Solving', category: 'Soft Skill' }
      ]
    },
    {
      level: 'Proficient',
      description: 'Strong working knowledge and practical project experience',
      color: '(255,255,255,0.04)',
      icon: '⭐',
      skills: [
        { name: 'Rust', category: 'Language' },
        { name: 'C/C++', category: 'Language' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'SQL', category: 'Language' },
        { name: 'Node.js', category: 'Framework' },
        { name: 'Angular', category: 'Framework' },
        { name: 'MySQL', category: 'Database' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Pandas', category: 'ML/Data' },
        { name: 'NumPy', category: 'ML/Data' },
        { name: 'Linux/Unix', category: 'Platform' },
        { name: 'OpenGL', category: 'Framework' }
      ]
    },
    {
      level: 'Intermediate',
      description: 'Comfortable using with growing expertise',
      color: '(255,255,255,0.04)',
      icon: '📚',
      skills: [
        { name: 'C#', category: 'Language' },
        { name: 'Scikit-learn', category: 'ML/Data' },
        { name: 'TensorFlow', category: 'ML/Data' },
        { name: 'Agile/Scrum', category: 'Methodology' },
        { name: 'Eclipse', category: 'Tool' },
        { name: 'Embedded Systems', category: 'Platform' }
      ]
    },
    {
      level: 'Familiar',
      description: 'Working knowledge through academic or project exposure',
      color: '(255,255,255,0.04)',
      icon: '🌱',
      skills: [
        { name: 'Scheme', category: 'Language' },
        { name: 'Verilog', category: 'Language' },
        { name: 'Assembly', category: 'Language' },
        { name: 'Quartus', category: 'Tool' },
        { name: 'Computer Architecture', category: 'Concept' },
        { name: 'Cybersecurity', category: 'Concept' }
      ]
    }
  ];

  public additionalCompetencies: string[] = [
    'Full-Stack Development',
    'Systems Programming',
    'Data Engineering',
    'Machine Learning',
    'Robotics',
    'API Development',
    'Network Infrastructure',
    'Technical Documentation',
    'Team Collaboration',
    'Waterfall Methodology'
  ];
}