import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeetRankPredictorComponent } from './neet-rank-predictor.component';


const routes: Routes = [
  {
    path: '',
    component:NeetRankPredictorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeetRankPredictorRoutingModule { }
