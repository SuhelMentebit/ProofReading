import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeConComponent } from './college-con.component';

describe('CollegeConComponent', () => {
  let component: CollegeConComponent;
  let fixture: ComponentFixture<CollegeConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

