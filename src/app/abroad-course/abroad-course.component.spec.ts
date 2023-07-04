import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadCourseComponent } from './abroad-course.component';

describe('AbroadCourseComponent', () => {
  let component: AbroadCourseComponent;
  let fixture: ComponentFixture<AbroadCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
