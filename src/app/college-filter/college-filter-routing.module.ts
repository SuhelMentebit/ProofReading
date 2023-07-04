import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeFilterComponent } from './college-filter.component';


const routes: Routes = [
  {
    path: '',
    component:CollegeFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeFilterRoutingModule { }
