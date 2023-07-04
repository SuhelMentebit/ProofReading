import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyContentComponent } from './study-content.component';

describe('StudyContentComponent', () => {
  let component: StudyContentComponent;
  let fixture: ComponentFixture<StudyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
