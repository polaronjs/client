import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { DropdownComponent } from './dropdown.component';

// modules
import { PopoverModule } from '../popover/popover.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, PopoverModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
