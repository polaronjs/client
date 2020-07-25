import { Component, ContentChild, Input } from '@angular/core';
import { IconComponent } from '@included/icon/icon.component';

type ButtonType = 'solid' | 'link';

type ButtonStyle = 'primary' | 'danger' | 'success';

type ButtonSize = 'small' | 'default' | 'large';

@Component({
  selector: 'p-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @ContentChild(IconComponent) icon?: IconComponent;

  @Input() buttonSize: ButtonSize = 'default';
  @Input() buttonType: ButtonType = 'solid';
  @Input() buttonStyle: ButtonStyle = 'primary';
  @Input() block: boolean = false;
  @Input() disabled: boolean = false;

  constructor() {}

  get hasIcon() {
    return !!this.icon;
  }

  get classes() {
    return {
      'button--icon': this.hasIcon,
      'button--disabled': this.disabled,
      ['button--type-' + this.buttonType]: true,
      ['button--style-' + this.buttonStyle]: true,
      ['button--size-' + this.buttonSize]: true,
    };
  }
}
