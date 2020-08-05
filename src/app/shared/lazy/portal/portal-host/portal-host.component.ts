import {
  Component,
  ViewContainerRef,
  Input,
  TemplateRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

// TODO:NickW investigate supporting leave animations

@Component({
  selector: 'p-portal-host',
  template: '<div *ngIf="showing" #host></div>',
})
export class PortalHostComponent implements AfterViewInit {
  @ViewChild('host', { read: ViewContainerRef })
  viewContainerRef?: ViewContainerRef;

  @Input() template!: TemplateRef<any>;
  @Input() data?: any;
  @Input() destroyer$!: Subject<0 | 1>;

  showing = true;

  constructor() {}

  ngAfterViewInit(): void {
    this.destroyer$
      ?.pipe(
        filter((value) => !value),
        take(1)
      )
      .subscribe(() => {
        this.showing = false;
        this.destroyer$.next(1);
      });

    if (this.template) {
      this.viewContainerRef?.createEmbeddedView(this.template, this.data, 0);
    }
  }
}
