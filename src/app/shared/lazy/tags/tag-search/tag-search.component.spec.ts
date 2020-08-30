import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// component under test
import { TagSearchComponent } from './tag-search.component';

// modules
import { MenuListModule } from '@lazy/menu-list/menu-list.module';
import { IncludedModule } from '@included/included.module';
import { DropdownModule } from '@lazy/dropdown/dropdown.module';

// components
import { TagComponent } from '../tag/tag.component';

describe('TagSearchComponent', () => {
  let component: TagSearchComponent;
  let fixture: ComponentFixture<TagSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MenuListModule, IncludedModule, DropdownModule],
      declarations: [TagSearchComponent, TagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
