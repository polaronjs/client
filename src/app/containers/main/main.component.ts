import { Component } from '@angular/core';
import { WindowService } from '@core/window';

@Component({
  selector: 'p-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public window: WindowService) {}
}
