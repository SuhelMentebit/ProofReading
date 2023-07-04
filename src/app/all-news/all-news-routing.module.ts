import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllNewsComponent } from './all-news.component';


const routes: Routes = [
  {
    path:'exam/.',
    component:AllNewsComponent
  },
  /*{
    path:'study-abroad',
    component:AllNewsComponent
  },*/
  // {
  //   path:'study-abroad',
  //   component:AllNewsComponent
  // },
  {
    path:'general/.',
    component:AllNewsComponent
  },
  /*{
    path:'how-to-guide',
    component:AllNewsComponent
  },
  {
    path:'neet-counselling',
    component:AllNewsComponent
  },
  {
    path:'top-college-universities',
    component:AllNewsComponent
  },*/
  {
    path:'all-news/.',
    component:AllNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllNewsRoutingModule { }
