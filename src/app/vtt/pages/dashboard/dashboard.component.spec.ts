import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load dashboard data on init', () => {
    expect(component.campaigns).toBeDefined();
    expect(component.stats).toBeDefined();
  });

  it('should display stats', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const statCards = compiled.querySelectorAll('.stat-card');
    expect(statCards.length).toBeGreaterThan(0);
  });

  it('should display quick actions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const actionCards = compiled.querySelectorAll('.action-card');
    expect(actionCards.length).toBe(component.quickActions.length);
  });

  it('should format dates correctly', () => {
    const testDate = new Date('2025-01-20');
    const formatted = component.formatDate(testDate);
    expect(formatted).toContain('Jan');
  });

  it('should return correct status class', () => {
    expect(component.getStatusClass('active')).toBe('status-active');
    expect(component.getStatusClass('paused')).toBe('status-paused');
    expect(component.getStatusClass('completed')).toBe('status-completed');
  });
});
