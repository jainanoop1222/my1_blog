import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogs2Component } from './all-blogs2.component';

describe('AllBlogs2Component', () => {
  let component: AllBlogs2Component;
  let fixture: ComponentFixture<AllBlogs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBlogs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
