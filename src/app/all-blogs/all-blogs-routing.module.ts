import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBlogsComponent } from './all-blogs.component';


const routes: Routes = [
  {
    path:'study-abroad/.',
    component:AllBlogsComponent
  },
  {
    path:'career/.',
    component:AllBlogsComponent
  },
  {
    path:'exam/.',
    component:AllBlogsComponent
  },
  {
    path:'general/.',
    component:AllBlogsComponent
  },
  {
    path:'how-to-guide/.',
    component:AllBlogsComponent
  },
  {
    path:'neet-counselling/.',
    component:AllBlogsComponent
  },
  {
    path:'top-colleges-and-universities/.',
    component:AllBlogsComponent
  },
  {
    path:'all-blogs/.',
    component:AllBlogsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBlogsRoutingModule { }
