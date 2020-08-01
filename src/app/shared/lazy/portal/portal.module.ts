import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalHostComponent } from './portal-host/portal-host.component';

@NgModule({
  declarations: [PortalComponent, PortalHostComponent],
  imports: [CommonModule],
  exports: [PortalComponent],
  entryComponents: [PortalHostComponent],
})
export class PortalModule {}
