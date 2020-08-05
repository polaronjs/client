import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PopoverComponent } from './popover.component';

// modules
import { PortalModule } from '@lazy/portal/portal.module';

@NgModule({
  declarations: [PopoverComponent],
  imports: [CommonModule, PortalModule],
  exports: [PopoverComponent],
})
export class PopoverModule {}
