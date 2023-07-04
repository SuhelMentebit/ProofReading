import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';


const routes: Routes = [
  {
    path: '',
    component:CourseComponent
  },
  // {
  //   path: 'MIT',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'MIT/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'MIT/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'MIT/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'MIT/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'MIT/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-bulgaria',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-bulgaria/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-bulgaria/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-bulgaria/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-bulgaria/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-bulgaria/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'engineering-in-russia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'engineering-in-russia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'engineering-in-russia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'engineering-in-russia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'engineering-in-russia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'engineering-in-russia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-czech-republic',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-czech-republic/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-czech-republic/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-czech-republic/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-czech-republic/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-czech-republic/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-germany',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-germany/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-germany/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-germany/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-germany/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-germany/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-australia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-australia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-australia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-australia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-australia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-australia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-new-zealand',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-new-zealand/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-new-zealand/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-new-zealand/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-new-zealand/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-new-zealand/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'bca-course-in-india',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'bca-course-in-india/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'bca-course-in-india/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'bca-course-in-india/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'bca-course-in-india/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'bca-course-in-india/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-canada',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-canada/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-canada/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-canada/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-canada/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-canada/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-ireland',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-ireland/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-ireland/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-ireland/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-ireland/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-ireland/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-russia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-russia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-russia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-russia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-russia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-russia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-armenia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-armenia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-armenia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-armenia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-armenia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-armenia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-australia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-australia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-australia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-australia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-australia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-australia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-belarus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-belarus/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-belarus/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-belarus/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-belarus/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-belarus/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-europe',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-europe/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-europe/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-europe/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-europe/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-europe/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-france',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-france/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-france/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-france/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-france/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-france/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-georgia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-georgia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-georgia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-georgia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-georgia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-georgia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-italy',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-italy/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-italy/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-italy/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-italy/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-italy/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-lithuania',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-lithuania/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-lithuania/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-lithuania/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-lithuania/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-lithuania/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-malaysia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-malaysia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-malaysia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-malaysia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-malaysia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-malaysia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-nepal',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-nepal/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-nepal/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-nepal/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-nepal/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-nepal/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-philippines',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-philippines/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-philippines/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-philippines/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-philippines/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-philippines/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-romania',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-romania/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-romania/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-romania/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-romania/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-romania/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-russia',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-russia/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-russia/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-russia/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-russia/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-russia/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-kyrgyzstan',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kyrgyzstan/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kyrgyzstan/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kyrgyzstan/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kyrgyzstan/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kyrgyzstan/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-usa',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-usa/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-usa/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-usa/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-usa/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-usa/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-course-in-india',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-course-in-india/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-course-in-india/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-course-in-india/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-course-in-india/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-course-in-india/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-malta',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-malta/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-malta/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-malta/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-malta/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-malta/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mba-in-uk',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-uk/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-uk/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-uk/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-uk/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mba-in-uk/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mca-in-india',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mca-in-india/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mca-in-india/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mca-in-india/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mca-in-india/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mca-in-india/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-kazakhstan',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kazakhstan/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kazakhstan/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kazakhstan/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kazakhstan/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-kazakhstan/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },

  // {
  //   path: 'mbbs-in-uzbekistan',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-uzbekistan/info',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-uzbekistan/top-colleges',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-uzbekistan/syllabus',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-uzbekistan/career-options',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
  // {
  //   path: 'mbbs-in-uzbekistan/faq',
  //   loadChildren: '../course-content/course-content.module#CourseContentModule'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
