import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { routes } from './demo.routes';

// pages
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [HomeComponent, DemoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DemoModule {}
