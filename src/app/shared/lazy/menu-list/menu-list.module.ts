import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { MenuListComponent } from './menu-list.component';

@NgModule({
  declarations: [MenuListComponent],
  exports: [MenuListComponent],
  imports: [CommonModule],
})
export class MenuListModule {}
