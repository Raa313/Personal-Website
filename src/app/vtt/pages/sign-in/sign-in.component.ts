import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


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
  username = '';
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMode() {
    this.isSignInMode = !this.isSignInMode;
    this.clearForm();
  }

  clearForm() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.username = '';
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.isSignInMode) {
      this.signIn();
    } else {
      this.createAccount();
    }
  }

  signIn() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'Login successful! Redirecting...';
        console.log('User logged in:', response.user);
        
        // Redirect to dashboard or home page after 1 second
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
        console.error('Login error:', error);
      }
    });
  }

  createAccount() {
    console.log('Creating account with', this.email, this.username); //this prints
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    this.isLoading = true;
    this.authService.register(this.email, this.password, this.username || undefined).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'Account created successfully! Redirecting...';
        console.log('User registered:', response.user);
        
        // Redirect to dashboard or home page after 1 second
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
        console.error('Registration error:', error);
      }
    });
  }
}