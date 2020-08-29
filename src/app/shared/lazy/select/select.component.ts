import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'p-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @ViewChild('selectButtonElement') buttonElement!: ElementRef<
    HTMLButtonElement
  >;

  @Input() selected?: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Select';
  @Input() options!: string[];
  @Input() block?: boolean = true;

  open?: boolean;
  buttonWidth!: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.buttonWidth = this.buttonElement?.nativeElement.getBoundingClientRect().width;
    this.cd.detectChanges();
  }

  close() {
    this.open = false;
  }
}
