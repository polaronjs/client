import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() mobile?: boolean;

  constructor() {}
}
