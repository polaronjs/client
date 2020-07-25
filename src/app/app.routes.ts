import { Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'polaron',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: 'polaron', pathMatch: 'full' },
];

if (!environment.production) {
  // prepend development routes
  // if these routes go to modules, those modules will be EXCLUDED from production builds
  // unless they're imported elsewhere
  routes.unshift({
    path: 'demo',
    loadChildren: () =>
      import('./pages/demo/demo.module').then((m) => m.DemoModule),
  });
}

export { routes };
