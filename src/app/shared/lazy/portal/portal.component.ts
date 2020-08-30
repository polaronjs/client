import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  OnDestroy,
  ContentChild,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  TemplateRef,
  AfterContentInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { PortalHostComponent } from './portal-host/portal-host.component';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { PortalDestroyEvent } from './typings';

@Component({
  selector: 'p-portal',
  template: '',
})
export class PortalComponent implements AfterContentInit, OnDestroy {
  @ContentChild(TemplateRef)
  content!: TemplateRef<HTMLElement>;

  @Output() requestToDestroy = new EventEmitter<PortalDestroyEvent>();

  // instance of PortalHostComponent to be populated from the content variable and injected into the DOM
  private viewer!: ComponentRef<PortalHostComponent>;

  private componentDestroyed$: Subject<void> = new Subject();
  private destroyer$ = new Subject<PortalDestroyEvent>();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngAfterContentInit() {
    if (!this.content) {
      console.error('Type error: cannot create a portal with no content');
    }

    // create a new PortalHostComponent and project our content into it
    this.viewer = this.componentFactoryResolver
      .resolveComponentFactory(PortalHostComponent)
      .create(this.injector);

    this.viewer.instance.template = this.content;
    this.viewer.instance.destroyer$ = this.destroyer$;

    // detect changes in the hostview so that :enter animations will work
    this.viewer.hostView.detectChanges();

    // attach component to angular's component tree (DOES NOT ADD TO DOM)
    this.appRef.attachView(this.viewer.hostView);

    // append viewer element to DOM
    const domElem = (this.viewer.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    this.destroyer$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => {
        if (value.status === 1) {
          this.destroy();
        } else {
          this.requestToDestroy.emit(value);
        }
      });
  }

  ngOnDestroy() {
    this.destroyer$.next({ status: 1 });
  }

  destroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();

    this.appRef.detachView(this.viewer.hostView);
    this.viewer.destroy();
  }
}
