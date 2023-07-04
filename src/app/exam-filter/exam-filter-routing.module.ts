import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamFilterComponent } from './exam-filter.component';


const routes: Routes = [
  {
    path: '',
    component:ExamFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamFilterRoutingModule { }
