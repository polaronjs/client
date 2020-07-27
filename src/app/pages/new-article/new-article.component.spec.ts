import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// component under test
import { NewArticleComponent } from './new-article.component';

// modules
import { IncludedModule } from '@included/included.module';
import { EditorModule } from '@lazy/editor/editor.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NewArticleComponent', () => {
  let component: NewArticleComponent;
  let fixture: ComponentFixture<NewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // TODO:NickW when the tests are fixed/added for the editor component, remove this and import the editor module
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IncludedModule],
      declarations: [NewArticleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
