import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsContentComponent } from './news-content.component';


const routes: Routes = [
  {
    path: '',
    component:NewsContentComponent
  },
  /*{
    path: 'university-transfer-from-ukraine-to-poland',
    component:NewsContentComponent
  },
  {
    path: 'university-transfer-from-ukraine-to-russia',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-nepal-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'university-transfer-from-ukraine-to-georgia',
    component:NewsContentComponent
  },
  {
    path: 'university-transfer-from-ukraine-to-hungary',
    component:NewsContentComponent
  },
  {
    path: 'top-reasons-to-study-mbbs-in-philippines',
    component:NewsContentComponent
  },
  {
    path: 'entry-requirements-to-study-in-uk',
    component:NewsContentComponent
  },
  {
    path: 'top-reasons-to-study-mbbs-in-europe',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-belarus-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-bangladesh-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-nepal-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-kazakhstan-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-poland-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-georgia-for-mbbs-studies',
    component:NewsContentComponent
  },
  {
    path: 'why-choose-russia-to-study-mbbs',
    component:NewsContentComponent
  },
  {
    path: 'top-countries-to-study-abroad',
    component:NewsContentComponent
  },
  {
    path: 'new-nmc-regulations-to-study-mbbs-abroad',
    component:NewsContentComponent
  },
  {
    path: 'top-benefits-of-studying-mbbs-abroad-for-indian-students',
    component:NewsContentComponent
  },
  {
    path: 'packing-list-for-study-abroad',
    component:NewsContentComponent
  },*/
  {
    path: 'neet-ug-exam-result-declared/.',
    component:NewsContentComponent
  },
  {
    path: 'neet-ug-exam-answer-key/.',
    component:NewsContentComponent
  },
  {
    path: 'neet-pg-result-declared/.',
    component:NewsContentComponent
  },
  {
    path: 'supreme-court-refuses-to-postpone-neet-pg/.',
    component:NewsContentComponent
  },
  {
    path: 'centre-removes-upper-age-limit-for-neet-ug-eligibility/.',
    component:NewsContentComponent
  },
  {
    path: 'ets-announces-new-english-language-test-toefl-essentials/.',
    component:NewsContentComponent
  },
  {
    path: 'neet-pg-exam-postponed/.',
    component:NewsContentComponent
  },
  {
    path: 'jee-main-exam-postponed/.',
    component:NewsContentComponent
  },
  {
    path: 'aiims-postpones-ini-cet-pg-entrance-exam/.',
    component:NewsContentComponent
  },
  {
    path: 'mbbs-in-philippines-is-accepted-in-india-after-the-announcement-from-ched/.',
    component:NewsContentComponent
  },
  {
    path: 'sc-directs-nmc-to-frame-scheme-for-ukraine-returned-medical-students/.',
    component:NewsContentComponent
  },
  {
    path: 'cbsc-releases-evaluation-criteria-for-new-academic-session/.',
    component:NewsContentComponent
  },
  {
    path: 'karnataka-education-minister-refuses-to-cancel-10th-board-exams/.',
    component:NewsContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsContentRoutingModule { }
