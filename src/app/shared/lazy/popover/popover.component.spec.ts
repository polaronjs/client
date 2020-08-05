import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// component under test
import { PopoverComponent } from './popover.component';

// modules
import { PortalModule } from '@lazy/portal/portal.module';

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverComponent],
      imports: [PortalModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
