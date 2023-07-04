import { ExamsComponent } from './exams.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component:ExamsComponent
  },
  // {
  //   path: 'MIT',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'MIT/info',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'MIT/exam-date',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'MIT/syllabus',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'MIT/cut-off',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'MIT/faq',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },

  // {
  //   path: 'neet-pg-exam',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-pg-exam/info',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-pg-exam/exam-date',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-pg-exam/syllabus',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-pg-exam/cut-off',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-pg-exam/faq',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },

  // {
  //   path: 'fmge-exam',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'fmge-exam/info',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'fmge-exam/exam-date',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'fmge-exam/syllabus',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'fmge-exam/cut-off',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'fmge-exam/faq',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },

  // {
  //   path: 'neet-ug-exam',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-ug-exam/info',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-ug-exam/exam-date',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-ug-exam/syllabus',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-ug-exam/cut-off',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'neet-ug-exam/faq',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },

  // {
  //   path: 'international-foundation-of-medicine-ifom',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'international-foundation-of-medicine-ifom/info',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'international-foundation-of-medicine-ifom/exam-date',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'international-foundation-of-medicine-ifom/syllabus',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'international-foundation-of-medicine-ifom/cut-off',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
  // {
  //   path: 'international-foundation-of-medicine-ifom/faq',
  //    loadChildren: '../exam-content/exam-content.module#ExamContentModule'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
