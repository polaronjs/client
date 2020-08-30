import {
  Component,
  ViewContainerRef,
  Input,
  TemplateRef,
  AfterViewInit,
  ViewChild,
  HostListener,
  ElementRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { take, filter } from 'rxjs/operators';
import { PortalDestroyEvent, PortalDestroyReason } from '../typings';

@Component({
  selector: 'p-portal-host',
  template: '<div *ngIf="showing" #host></div>',
})
export class PortalHostComponent implements AfterViewInit {
  @ViewChild('host', { read: ViewContainerRef })
  viewContainerRef?: ViewContainerRef;

  @Input() template!: TemplateRef<any>;
  @Input() data?: any;
  @Input() destroyer$!: Subject<PortalDestroyEvent>;

  showing = true;

  constructor(private host: ElementRef<HTMLElement>) {}

  // TODO:NickW Consider externalizing the window click to a service with an observable
  // to avoid multiple duplicate event handlers
  @HostListener('window:click', ['$event.target'])
  handleClicks(target: HTMLElement) {
    if (!this.host.nativeElement.contains(target)) {
      this.destroyer$.next({ status: 0, reason: PortalDestroyReason.CLICK });
    }
  }

  ngAfterViewInit(): void {
    this.destroyer$
      ?.pipe(
        filter(({ status }) => !!status),
        take(1)
      )
      .subscribe(() => {
        this.showing = false;
        this.destroyer$.next({ status: 1 });
      });

    if (this.template) {
      this.viewContainerRef?.createEmbeddedView(this.template, this.data, 0);
    }
  }
}
