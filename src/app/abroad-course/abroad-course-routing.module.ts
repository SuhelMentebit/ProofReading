import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbroadCourseComponent } from './abroad-course.component';


const routes: Routes = [
  {
    path: '',
    component:AbroadCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbroadCourseRoutingModule { }
