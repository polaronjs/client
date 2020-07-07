import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { routes } from './auth.routes';

// pages
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';

@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
