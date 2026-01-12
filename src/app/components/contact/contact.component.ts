import { Component } from '@angular/core';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
  description: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rdharmon313@gmail.com',
      link: 'mailto:rdharmon313@gmail.com',
      description: 'Best for detailed inquiries and professional communication'
    },
    // {
    //   icon: '📱',
    //   title: 'Phone',
    //   value: '+1 (775) 762-6628',
    //   link: 'tel:+17757626628',
    //   description: 'Available for quick conversations'
    // },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'ryan-harmon-876541360',
      link: 'https://linkedin.com/in/ryan-harmon-876541360',
      description: 'Connect professionally and view my full profile'
    }
  ];

  copyToClipboard(text: string, type: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type} copied to clipboard!`);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
}