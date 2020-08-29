import {
  Component,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ContentChildren,
} from '@angular/core';

@Component({
  selector: 'p-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent {
  @ContentChildren(TemplateRef, { read: TemplateRef }) elements?: QueryList<
    TemplateRef<HTMLElement>
  >;

  @ViewChild('menuListBody', { read: ViewContainerRef })
  menuListBody!: ViewContainerRef;

  constructor() {}

  ngAfterViewInit() {
    this.elements?.forEach((element) => {
      this.menuListBody.createEmbeddedView(element);
    });
  }
}
