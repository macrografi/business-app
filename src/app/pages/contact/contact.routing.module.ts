import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ContactComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactRoutingModule {}
