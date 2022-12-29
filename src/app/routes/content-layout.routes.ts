import { Routes } from '@angular/router';

export const Content_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../pages/authentication/authentication-pages-routing.module').then((x) => x.AuthenticationPagesRoutingModule),
  },
];
