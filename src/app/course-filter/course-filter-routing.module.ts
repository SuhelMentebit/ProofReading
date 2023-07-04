import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFilterComponent } from './course-filter.component';


const routes: Routes = [
  {
    path: '',
    component:CourseFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseFilterRoutingModule { }
