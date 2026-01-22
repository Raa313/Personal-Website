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
  activeCampaigns: number;
  totalCharacters: number;
  totalSessions: number;
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
    activeCampaigns: 0,
    totalCharacters: 0,
    totalSessions: 0
  };
  isLoading = false;

  quickActions = [
    { label: 'New Campaign', icon: '✨', path: '/vtt/new-campaign' },
    { label: 'Browse Campaigns', icon: '🗺️', path: '/vtt/campaigns' },
    { label: 'Character Sheet', icon: '🧙', path: '/vtt/character' },
    { label: 'Dice Roller', icon: '🎲', path: '/vtt/dice' }
  ];

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.isLoading = true;
    
    // Mock data - replace with actual API calls
    setTimeout(() => {
      this.campaigns = [
        {
          id: 1,
          name: 'Dragon\'s Hoard Quest',
          players: 5,
          status: 'active',
          lastPlayed: new Date('2025-01-20')
        },
        {
          id: 2,
          name: 'Shadow of Mordor',
          players: 4,
          status: 'active',
          lastPlayed: new Date('2025-01-18')
        },
        {
          id: 3,
          name: 'Lost City Expedition',
          players: 3,
          status: 'paused',
          lastPlayed: new Date('2025-01-10')
        }
      ];

      this.stats = {
        totalCampaigns: 8,
        activeCampaigns: 2,
        totalCharacters: 12,
        totalSessions: 24
      };

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
