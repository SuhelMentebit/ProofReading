import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamContentComponent } from './exam-content.component';


const routes: Routes = [
  {
    path: '',
    component: ExamContentComponent
  },
  {
    path: 'MIT/.',
    component: ExamContentComponent
  },
  {
    path: 'MIT/info/.',
    component: ExamContentComponent
  },
  {
    path: 'MIT/exam-date/.',
    component: ExamContentComponent
  },
  {
    path: 'MIT/syllabus/.',
    component: ExamContentComponent
  },
  {
    path: 'MIT/cut-off/.',
    component: ExamContentComponent
  },
  {
    path: 'MIT/faq/.',
    component: ExamContentComponent
  },

  {
    path: 'neet-pg-exam/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-pg-exam/info/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-pg-exam/exam-date/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-pg-exam/syllabus/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-pg-exam/cut-off/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-pg-exam/faq/.',
    component: ExamContentComponent
  },

  {
    path: 'fmge-exam/.',
    component: ExamContentComponent
  },
  {
    path: 'fmge-exam/info/.',
    component: ExamContentComponent
  },
  {
    path: 'fmge-exam/exam-date/.',
    component: ExamContentComponent
  },
  {
    path: 'fmge-exam/syllabus/.',
    component: ExamContentComponent
  },
  {
    path: 'fmge-exam/cut-off/.',
    component: ExamContentComponent
  },
  {
    path: 'fmge-exam/faq/.',
    component: ExamContentComponent
  },

  {
    path: 'neet-ug-exam/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-ug-exam/info/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-ug-exam/exam-date/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-ug-exam/syllabus/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-ug-exam/cut-off/.',
    component: ExamContentComponent
  },
  {
    path: 'neet-ug-exam/faq/.',
    component: ExamContentComponent
  },

  {
    path: 'international-foundation-of-medicine-ifom/.',
    component: ExamContentComponent
  },
  {
    path: 'international-foundation-of-medicine-ifom/info/.',
    component: ExamContentComponent
  },
  {
    path: 'international-foundation-of-medicine-ifom/exam-date/.',
    component: ExamContentComponent
  },
  {
    path: 'international-foundation-of-medicine-ifom/syllabus/.',
    component: ExamContentComponent
  },
  {
    path: 'international-foundation-of-medicine-ifom/cut-off/.',
    component: ExamContentComponent
  },
  {
    path: 'international-foundation-of-medicine-ifom/faq/.',
    component: ExamContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamContentRoutingModule { }
