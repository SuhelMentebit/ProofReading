import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeetRankPredictorComponent } from './neet-rank-predictor.component';

describe('NeetRankPredictorComponent', () => {
  let component: NeetRankPredictorComponent;
  let fixture: ComponentFixture<NeetRankPredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeetRankPredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeetRankPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
