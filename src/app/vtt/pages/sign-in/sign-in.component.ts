import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isSignInMode = true;
  email = '';
  password = '';
  confirmPassword = '';

  toggleMode() {
    this.isSignInMode = !this.isSignInMode;
    this.clearForm();
  }

  clearForm() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  onSubmit() {
    if (this.isSignInMode) {
      this.signIn();
    } else {
      this.createAccount();
    }
  }

  signIn() {
    if (!this.email || !this.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Signing in with:', this.email);
    // Add your sign-in logic here (e.g., call authentication service)
    alert(`Signing in with email: ${this.email}`);
  }

  createAccount() {
    if (!this.email || !this.password || !this.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (this.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    console.log('Creating account with:', this.email);
    // Add your account creation logic here (e.g., call authentication service)
    alert(`Account created with email: ${this.email}`);
  }
}