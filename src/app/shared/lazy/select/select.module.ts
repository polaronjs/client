import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';

// modules
import { IncludedModule } from '@included/included.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { MenuListModule } from '../menu-list/menu-list.module';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, IncludedModule, DropdownModule, MenuListModule],
})
export class SelectModule {}
