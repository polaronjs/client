import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// component under test
import { PortalComponent } from './portal.component';

// other components
import { PortalHostComponent } from './portal-host/portal-host.component';

describe('PortalComponent', () => {
  let component: PortalComponent;
  let fixture: ComponentFixture<PortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortalComponent, PortalHostComponent],
      imports: [NoopAnimationsModule],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PortalHostComponent],
      },
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
