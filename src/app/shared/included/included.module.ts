import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { IconComponent } from './icon/icon.component';
import { LogoComponent } from './logo/logo.component';
import { AccessLevelPipe } from './access-level/access-level.pipe';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    IconComponent,
    LogoComponent,
    AccessLevelPipe,
    ButtonComponent,
  ],
  exports: [IconComponent, LogoComponent, AccessLevelPipe, ButtonComponent],
  imports: [CommonModule],
})
export class IncludedModule {}
