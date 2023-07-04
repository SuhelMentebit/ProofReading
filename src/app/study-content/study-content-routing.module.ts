import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyContentComponent } from './study-content.component';


const routes: Routes = [
  {
    path: '',
    component:StudyContentComponent
  },
  {
    path: 'demo',
    component:StudyContentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyContentRoutingModule { }
