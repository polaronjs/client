import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// component under test
import { PortalHostComponent } from './portal-host.component';

describe('PortalHostComponent', () => {
  let component: PortalHostComponent;
  let fixture: ComponentFixture<PortalHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortalHostComponent],
      imports: [NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
