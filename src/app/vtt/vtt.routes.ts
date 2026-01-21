import { Routes } from '@angular/router';
import { VttLayoutComponent } from './layout/vtt-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const VTT_ROUTES: Routes = [
  {
    path: '',
    component: VttLayoutComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  }
];