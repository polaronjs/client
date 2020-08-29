import {
  Component,
  Input,
  TemplateRef,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter,
} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'p-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('dropdown', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('200ms ease', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('200ms ease', style({ transform: 'scale(0)' })),
      ]),
    ]),
  ],
})
export class DropdownComponent {
  @Input() handle!: TemplateRef<HTMLElement>;

  @Input() visible!: boolean;

  @Input() minDropdownWidth: number = 170;

  @ContentChildren(TemplateRef, { read: TemplateRef })
  elements?: QueryList<TemplateRef<HTMLElement>>;

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
