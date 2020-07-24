import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { DemoComponent } from './demo.component';

// routes
import { routes } from './demo.routes';

// pages
import { HomeComponent } from './pages/home/home.component';

// modules
import { EditorModule } from '@lazy/editor/editor.module';
import { IncludedModule } from '@included/included.module';
import { DemoItemComponent } from './pages/components/demo-item/demo-item.component';

@NgModule({
  declarations: [HomeComponent, DemoComponent, DemoItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IncludedModule,
    EditorModule,
  ],
})
export class DemoModule {}
