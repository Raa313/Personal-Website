import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Campaign {
  id: number;
  name: string;
  players: number;
  status: 'active' | 'paused' | 'completed';
  lastPlayed: Date;
}

interface DashboardStats {
  totalCampaigns: number;
  totalCharacters: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  campaigns: Campaign[] = [];
  stats: DashboardStats = {
    totalCampaigns: 0,
    totalCharacters: 0,
  };
  isLoading = false;

  quickActions = [
    { label: 'New Campaign', icon: '✨', path: '/vtt/new-campaign' },
    { label: 'New Character', icon: '🧙', path: '/vtt/new-character' },
  ];

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.isLoading = true;
    
    // Mock data - replace with actual API calls
    setTimeout(() => {

      this.isLoading = false;
    }, 500);
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
}
