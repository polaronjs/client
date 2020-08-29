import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';

// modules
import { IncludedModule } from '@included/included.module';
import { DropdownModule } from '@lazy/dropdown/dropdown.module';
import { MenuListModule } from '@lazy/menu-list/menu-list.module';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IncludedModule, DropdownModule, MenuListModule],
      declarations: [SelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
