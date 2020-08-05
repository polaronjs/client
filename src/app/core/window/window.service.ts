import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const WindowWidthThresholds = {
  mobile: 500,
  tablet: 1000,
};

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  activeThreshold!: keyof typeof WindowWidthThresholds | null;
  resize: Subject<{ w: number; h: number }> = new Subject();

  scrollYPosition!: number;
  scrollXPosition!: number;
  scroll: Subject<{ x: number; y: number }> = new Subject();

  constructor() {
    window.onresize = () => {
      this.getDimensions();
    };

    window.onscroll = () => {
      this.getScrollValues();
    };

    this.getDimensions();
  }

  private getScrollValues() {
    this.scrollXPosition = window.scrollX;
    this.scrollYPosition = window.scrollY;

    this.scroll.next({ x: this.scrollXPosition, y: this.scrollYPosition });
  }

  private getDimensions() {
    if (window.innerWidth <= WindowWidthThresholds.mobile) {
      this.activeThreshold = 'mobile';
    } else if (window.innerWidth <= WindowWidthThresholds.tablet) {
      this.activeThreshold = 'tablet';
    } else {
      this.activeThreshold = null;
    }

    this.resize.next({ w: window.innerWidth, h: window.innerHeight });
  }
}
