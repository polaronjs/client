import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-icon',
  template: `<i
    [attr.class]="
      'fa' + weight.charAt(0) + ' fa-' + name + (spin ? ' spin' : '')
    "
  ></i>`,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name!: string;
  @Input() weight: 'regular' | 'solid' | 'light' | 'brands' = 'regular';
  @Input() spin?: boolean;
}
