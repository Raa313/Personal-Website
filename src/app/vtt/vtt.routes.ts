import { Routes } from '@angular/router';
import { VttLayoutComponent } from './layout/vtt-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const VTT_ROUTES: Routes = [
  {
    path: '',
    component: VttLayoutComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];