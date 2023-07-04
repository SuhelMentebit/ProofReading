import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityConComponent } from './university-con.component';

describe('UniversityConComponent', () => {
  let component: UniversityConComponent;
  let fixture: ComponentFixture<UniversityConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
