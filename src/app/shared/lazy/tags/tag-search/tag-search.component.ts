import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

const MOCK_SEARCH_RESULTS = ['test', 'test 2', 'dinosaur', 'test dinosaur'];

@Component({
  selector: 'p-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss'],
})
export class TagSearchComponent implements AfterViewInit {
  @ViewChild('searchBar') searchBarElement!: ElementRef<HTMLElement>;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @Input() tags?: Set<string> = new Set();

  searchInput$ = new Subject<string>();

  searchResults: string[] = [];

  isSearching = false;
  dropdownVisible = false;
  dropdownWidth?: number;

  private destroyed$ = new Subject<void>();

  constructor(private cd: ChangeDetectorRef) {
    this.searchInput$
      .pipe(debounceTime(400), takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.search(value);
      });
  }

  ngAfterViewInit() {
    this.dropdownWidth = this.searchBarElement.nativeElement.getBoundingClientRect().width;
    this.cd.detectChanges();
  }

  search(query: string) {
    if (!query) {
      // if query is empty, clear search
      this.searchResults = [];
      this.dropdownVisible = false;
      return;
    }

    this.isSearching = true;
    this.dropdownVisible = true;
    //TODO:NickW move search to API
    setTimeout(() => {
      this.searchResults = MOCK_SEARCH_RESULTS.filter((x) =>
        x.match(new RegExp(query, 'gi'))
      );

      this.isSearching = false;
    }, 450);
  }

  toggle(tag: string) {
    const t = tag.toLowerCase();
    if (this.tags?.has(t)) {
      this.remove(t);
    } else {
      this.add(t);
    }
  }

  private add(tag: string) {
    // TODO:NickW send change to API
    this.tags?.add(tag.toLowerCase());
  }

  private remove(tag: string) {
    // TODO:NickW send change to API
    this.tags?.delete(tag.toLowerCase());
  }

  trackBySearchResult(_: number, value: string) {
    return value;
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
