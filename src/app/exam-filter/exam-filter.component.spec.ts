import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFilterComponent } from './exam-filter.component';

describe('ExamFilterComponent', () => {
  let component: ExamFilterComponent;
  let fixture: ComponentFixture<ExamFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
