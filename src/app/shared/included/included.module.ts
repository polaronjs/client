import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { IconComponent } from './icon/icon.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [IconComponent, LogoComponent],
  exports: [IconComponent, LogoComponent],
  imports: [CommonModule],
})
export class IncludedModule {}
