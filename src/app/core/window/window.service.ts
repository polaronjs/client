import { Injectable } from '@angular/core';

export const WindowThresholds = {
  mobile: 500,
  tablet: 1000,
};

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  // @ts-ignore this is DEFINITELY set in the constructor since we called the `calculate` function
  activeThreshold: keyof typeof WindowThresholds | null;

  constructor() {
    window.onresize = () => {
      this.calculate();
    };

    this.calculate();
  }

  private calculate() {
    if (window.innerWidth <= WindowThresholds.mobile) {
      this.activeThreshold = 'mobile';
    } else if (window.innerWidth <= WindowThresholds.tablet) {
      this.activeThreshold = 'tablet';
    } else {
      this.activeThreshold = null;
    }
  }
}
