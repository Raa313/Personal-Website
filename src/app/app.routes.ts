import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.routes').then(m => m.PORTFOLIO_ROUTES)
  },
  {
    path: 'vtt',
    loadChildren: () =>
      import('./vtt/vtt.routes').then(m => m.VTT_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
