import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'p-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  // TODO add vertical display mode?

  @Input() size: 'regular' | 'small' = 'regular';

  constructor() {}

  ngOnInit(): void {}
}
