import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationPagesRoutingModule } from './authentication-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, AuthenticationPagesRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthenticationPagesModule {}
