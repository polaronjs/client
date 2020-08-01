import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'p-page-load-progress',
  templateUrl: './page-load-progress.component.html',
  styleUrls: ['./page-load-progress.component.scss'],
})
export class PageLoadProgressComponent implements OnInit {
  private destroyed: Subject<void> = new Subject();
  // Timeout
  private timeout?: any;

  constructor(private router: Router) {}

  loading: 0 | 1 | 2 = 0;

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroyed)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.timeout = setTimeout(this.start.bind(this), 250);
      } else if (event instanceof NavigationEnd) {
        clearTimeout(this.timeout);
        this.complete();
      }
    });
  }

  start() {
    this.loading = 1;
  }

  complete() {
    this.loading = 2;

    setTimeout(() => {
      this.loading = 0;
    }, 515);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.unsubscribe();
  }
}
