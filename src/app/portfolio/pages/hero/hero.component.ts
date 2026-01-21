import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  email = 'rdharmon313@gmail.com';

  openEmail() {
    const mailtoLink = `mailto:${this.email}?subject=Let's Connect&body=Hi Ryan,%0D%0A%0D%0AI'd like to discuss...`;
    
    // Try to open email client
    window.location.href = mailtoLink;
    
    // Fallback: Show alert with email after a delay
    setTimeout(() => {
      if (document.hasFocus()) {
        alert(`If your email client didn't open, you can reach me at: ${this.email}`);
      }
    }, 1000);
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      alert('Email copied to clipboard!');
    });
  }
}