import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@core/auth';

import { UserMenuComponent } from './user-menu.component';

// modules
import { IncludedModule } from '@included/included.module';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IncludedModule],
      declarations: [UserMenuComponent],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
