import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyAbroadComponent } from './study-abroad.component';


const routes: Routes = [
  {
    path: '',
    component:StudyAbroadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyAbroadRoutingModule { }
