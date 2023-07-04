import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityFilterComponent } from './university-filter.component';
import { AccordionModule } from "primeng/accordion";


const routes: Routes = [
  {
    path: '',
    component:UniversityFilterComponent,
    // children: [
    //   {
    //     path: ':fdr',
    //     component: UniversityFilterComponent,
    //   }
    // ]
  },
  {
    path: ':link1/:link2/.',
    component:UniversityFilterComponent,
  },
  // {
  //   path: 'stream',
  //   component:UniversityFilterComponent
  // },
  // {
  //   path: 'stream/:fdr',
  //   component:UniversityFilterComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes),AccordionModule],
  exports: [RouterModule]
})
export class UniversityFilterRoutingModule { }