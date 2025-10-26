import { Component } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: string;
  date: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      title: 'Rust ASCII Animation Framework',
      subtitle: 'GPU-Accelerated Rendering Engine',
      description: 'Built a high-performance Rust-based API for creating async/await ASCII animations with GPU acceleration via OpenGL. Designed for accessibility and performance.',
      technologies: ['Rust', 'OpenGL', 'Async/Await', 'GPU Programming'],
      highlights: [
        'Eliminated CPU throttling for smooth rendering',
        'GPU-accelerated rendering pipeline',
        'Developer-friendly API with minimal code requirements',
        'Async/await support for complex animations'
      ],
      icon: '🎮',
      date: 'Fall 2022'
    },
    {
      title: 'Full-Stack Booking Platform',
      subtitle: 'Government Inmate Intake System',
      description: 'Designed and developed a full-stack booking platform for Washoe County to streamline inmate intake processes, including indigent status cataloging and Microsoft account integration.',
      technologies: ['Full-Stack', 'Node.js', 'Microsoft Authentication', 'SQL', 'Security Protocols'],
      highlights: [
        'Streamlined inmate intake workflows',
        'Reduced manual data entry significantly',
        'Migrated to Microsoft account synchronization',
        'Implemented group-based security protocols',
        'Collaborated directly with government stakeholders'
      ],
      icon: '🏛️',
      date: 'Summer 2024'
    },
    {
      title: 'Programming Language Interpreter',
      subtitle: 'Scheme Language Implementation',
      description: 'Implemented a complete Scheme interpreter with lexical analysis, syntax parsing, and code execution. Validated through 200+ test programs with full execution support.',
      technologies: ['Scheme', 'Compiler Design', 'Parser', 'Lexical Analysis'],
      highlights: [
        'Full lexical analysis and syntax parsing',
        'Complete code execution engine',
        'Validated with 200+ test programs',
        'Achieved full Scheme feature support',
        'Collaborative development with effective task division'
      ],
      icon: '🔤',
      date: 'Winter 2022'
    },
    {
      title: 'Custom Computer Processor',
      subtitle: 'Verilog Accumulator Processor',
      description: 'Designed and tested a custom accumulator processor from scratch with a 4-person team. Implemented in Verilog and benchmarked for instruction cycle performance.',
      technologies: ['Verilog', 'Computer Architecture', 'Quartus', 'Hardware Design'],
      highlights: [
        'End-to-end processor design workflow',
        'Custom instruction set architecture',
        'Performance benchmarking and analysis',
        'Team-based architecture and testing',
        'Hands-on hardware simulation experience'
      ],
      icon: '⚡',
      date: 'Spring 2023'
    },
    {
      title: 'RoboMasters Competition Robots',
      subtitle: 'International Robot Combat Systems',
      description: 'Designed and programmed robot control frameworks in C++/Python for international robot combat competitions. Integrated sensors and hardware with real-time control systems.',
      technologies: ['C++', 'Python', 'Robotics', 'Real-Time Systems', 'Sensor Integration'],
      highlights: [
        'Designed control frameworks for 3 competition robots',
        'Real-time robot control system integration',
        'External sensor and hardware integration',
        'Successfully deployed in international competitions',
        'Cross-functional team collaboration'
      ],
      icon: '🤖',
      date: 'Ongoing'
    }
  ];
}