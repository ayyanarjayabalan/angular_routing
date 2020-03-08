import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDeatailComponent } from './course-deatail.component';

describe('CourseDeatailComponent', () => {
  let component: CourseDeatailComponent;
  let fixture: ComponentFixture<CourseDeatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDeatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
