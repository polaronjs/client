import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
  ViewChildren,
  QueryList,
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  group,
  query,
  animateChild,
} from '@angular/animations';
import { Subject } from 'rxjs';
import { WindowService } from '@core/window';
import { takeUntil } from 'rxjs/operators';

// TODO:NickW Add option to render handle in portal as well as popover, i.e. product tours

// TODO:NickW Implement actual focus trapping

@Component({
  selector: 'p-popover',
  templateUrl: 'popover.component.html',
  styleUrls: ['./popover.component.scss'],
  animations: [
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        group([
          query('@*', animateChild(), { optional: true }),
          animate('300ms ease', style({ opacity: 0.8 })),
        ]),
      ]),
      transition(':leave', [
        style({ opacity: 0.8 }),
        group([
          query('@*', animateChild(), { optional: true }),
          animate('300ms 100ms ease', style({ opacity: 0 })),
        ]),
      ]),
    ]),
    trigger('popover', [
      transition(':enter', [
        style({ opacity: 0 }),
        group([
          query('@*', animateChild(), { optional: true }),
          animate('300ms {{ delay }} ease', style({ opacity: 1 })),
        ]),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        group([
          query('@*', animateChild(), { optional: true }),
          animate('300ms ease', style({ opacity: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class PopoverComponent implements OnInit {
  @ViewChildren('popoverElement') popoverElement!: QueryList<
    ElementRef<HTMLElement>
  >;

  /**
   * A template ref for the element to which the popover should be positioned relative to
   */
  @Input() handle?: TemplateRef<HTMLElement>;

  /**
   * Dictates whether or not the popover should be visible
   */
  @Input() visible: boolean = true;

  /**
   * Dictates whether or not a backdrop should be visible
   */
  @Input() backdropVisible?: boolean;

  /**
   * Uses a white backdrop instead of a black backdrop
   */
  @Input() lightBackdrop?: boolean;

  /**
   * Amount of padding to add to top of popover element
   */
  @Input() topOffset: number = 0;

  /**
   * Specifies on which side of the handle element to align the popover
   */
  @Input() verticalAlignment: 'top' | 'bottom' = 'bottom';

  /**
   * Amount of padding to add to left of popover element
   */
  @Input() leftOffset: number = 0;

  /**
   * Specifies on which side of the handle element to align the popover
   */
  @Input() horizontalAlignment: 'left' | 'right' = 'left';

  /**
   * Specifies whether or not clicking the backdrop should close the popover.
   * Only available if [backdropVisible] is true.
   */
  @Input() closeOnBackdropClick?: boolean;

  /**
   * Specifies whether or not scrolling the window should close the popover
   */
  @Input() closeOnScroll?: boolean;

  /**
   * Specifies whether or not the popover should "stick" to the handle element when scrolling
   */
  @Input() maintainPositionOnScroll = true;

  /**
   * Specifies whether or not pressing the "Escape" key should close the popover
   */
  @Input() closeOnEscape: boolean = true;

  /**
   * [beta] Currently only focuses popover on initial open, does not trap focus.
   * Intended to specify whether or not the user's keyboard should be "trapped" inside the popover until closed.
   */
  @Input() trapFocus?: boolean;

  /**
   * Fired when a close event has been generated internally by the popover component
   */
  @Output() close = new EventEmitter<void>();

  topPosition?: number;

  leftPosition?: number;

  /**
   * The embedded view ref for the popover handle
   */
  private embeddedViewRef?: EmbeddedViewRef<HTMLElement>;

  private previouslyFocusedElement?: HTMLElement;

  private destroyed$ = new Subject<void>();

  constructor(
    private viewRef: ViewContainerRef,
    private windowService: WindowService
  ) {}

  private get positionRefElement() {
    return this.embeddedViewRef?.rootNodes[0] as HTMLElement;
  }

  ngOnInit(): void {
    this.windowService.scroll.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      if (this.closeOnScroll) {
        this.close.emit();
      } else if (this.maintainPositionOnScroll) {
        this.calculatePosition();
      }
    });

    this.createHandleElement();
  }

  ngAfterViewInit() {
    this.popoverElement.changes
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        if (this.visible) {
          this.calculatePosition();
        }

        this.triggerFocusUpdate();
      });
  }

  @HostListener('window:keyup', ['$event.key'])
  triggerClose(key?: string) {
    if (this.visible && (!key || (this.closeOnEscape && key === 'Escape'))) {
      this.close.emit();
    }
  }
  private createHandleElement() {
    // check for a handle template ref and create the embedded view
    if (this.handle && this.handle instanceof TemplateRef) {
      this.embeddedViewRef = this.viewRef.createEmbeddedView(
        this.handle as TemplateRef<any>
      );
    } else {
      console.error(
        'Unknown type: Value passed to positionRefElement must be a TemplateRef.'
      );
    }
  }

  private calculatePosition(element = this.positionRefElement) {
    this.topPosition =
      element.offsetTop +
      (this.verticalAlignment === 'bottom' ? element.offsetHeight : 0) +
      this.topOffset -
      (this.windowService.scrollYPosition || 0);

    this.leftPosition =
      element.offsetLeft +
      (this.horizontalAlignment === 'right' ? element.offsetWidth : 0) +
      this.leftOffset -
      (this.windowService.scrollXPosition || 0);
  }

  private triggerFocusUpdate() {
    if (this.visible) {
      this.previouslyFocusedElement = document.activeElement as HTMLElement;

      if (this.trapFocus) {
        this.popoverElement?.first?.nativeElement?.focus();
      }
    } else if (!this.visible) {
      this.previouslyFocusedElement?.focus();
      this.previouslyFocusedElement = undefined;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
