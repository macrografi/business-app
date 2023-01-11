import { Routes } from '@angular/router';

export const Content_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../pages/authentication/authentication-pages.module').then((x) => x.AuthenticationPagesModule),
  },
];
