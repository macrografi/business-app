import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Error400Component } from './pages/error-pages/error-400/error-400.component';
import { Error401Component } from './pages/error-pages/error-401/error-401.component';
import { Error403Component } from './pages/error-pages/error-403/error-403.component';
import { Error404Component } from './pages/error-pages/error-404/error-404.component';
import { Error500Component } from './pages/error-pages/error-500/error-500.component';
import { Content_ROUTES } from './routes/content-layout.routes';
import { Full_ROUTES } from './routes/full-layout.routes';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'error/400',
    component: Error400Component,
    data: { title: 'Not Authorized', moduleId: 0 },
  },
  {
    path: 'error/401',
    component: Error401Component,
    data: { title: 'Not Found', moduleId: 0 },
  },
  {
    path: 'error/403',
    component: Error403Component,
    data: { title: 'Not Found', moduleId: 0 },
  },
  {
    path: 'error/404',
    component: Error404Component,
    data: { title: 'Not Found', moduleId: 0 },
  },
  {
    path: 'error/500',
    component: Error500Component,
    data: { title: 'Not Found', moduleId: 0 },
  },
  {
    path: '',
    component: ContentLayoutComponent,
    data: { title: 'Content Views' },
    children: Content_ROUTES,
    runGuardsAndResolvers: 'always',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'Full Views' },
    children: Full_ROUTES,
    runGuardsAndResolvers: 'always',
  },
  { path: '**', redirectTo: 'error/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
