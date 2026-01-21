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
      date: 'Fall 2024 - Spring 2025'
    },
    {
      title: 'Programming Language Interpreter',
      subtitle: 'Scheme Language Implementation',
      description: 'Implemented a Scheme interpreter with lexical analysis, syntax parsing, and code execution. Validated through 200+ test programs with ability to interpret itself.',
      technologies: ['Scheme', 'Compiler Design', 'Parser', 'Lexical Analysis'],
      highlights: [
        'Garbage collection implementation',
        'Tail call optimization for performance',
        'Achieved core Scheme feature support',
        'Collaborative development with effective task division'
      ],
      icon: '🔤',
      date: 'Fall 2024'
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
    }
  ];
}