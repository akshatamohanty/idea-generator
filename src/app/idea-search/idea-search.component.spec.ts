import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSearchComponent } from './idea-search.component';

describe('IdeaSearchComponent', () => {
  let component: IdeaSearchComponent;
  let fixture: ComponentFixture<IdeaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
