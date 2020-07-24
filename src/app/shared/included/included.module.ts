import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { IconComponent } from './icon/icon.component';
import { LogoComponent } from './logo/logo.component';
import { AccessLevelPipe } from './access-level/access-level.pipe';

@NgModule({
  declarations: [IconComponent, LogoComponent, AccessLevelPipe],
  exports: [IconComponent, LogoComponent, AccessLevelPipe],
  imports: [CommonModule],
})
export class IncludedModule {}
