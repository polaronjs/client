import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// component under test
import { DropdownComponent } from './dropdown.component';

// modules
import { PopoverModule } from '@lazy/popover/popover.module';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PopoverModule],
      declarations: [DropdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
