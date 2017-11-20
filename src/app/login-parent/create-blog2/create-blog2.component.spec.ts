import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlog2Component } from './create-blog2.component';

describe('CreateBlog2Component', () => {
  let component: CreateBlog2Component;
  let fixture: ComponentFixture<CreateBlog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBlog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
