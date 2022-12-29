import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];
