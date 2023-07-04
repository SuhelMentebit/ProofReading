import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPComponent } from './error-p/error-p.component';
import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';
// import ErrorPageComponent from '../'


const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: ()=> import( './home/home.module').then(x=>x.HomeModule)
  // },
  {
    path: '',
    loadChildren:()=> import('./home/home.module').then(x=> x.HomeModule)
  },
  {
    path: 'blog/.',
    loadChildren:()=> import('./blog/blog.module').then(x=>x.BlogModule)
  },
  {
    path: 'blog',
    loadChildren:()=> import('./blog-content/blog-content.module').then(x=>x.BlogContentModule)
  },
  {
    path: 'blog/category',
    loadChildren:()=> import( './all-blogs/all-blogs.module').then(x=>x.AllBlogsModule)
  },
  {
    path: 'news/.',
    loadChildren:()=> import( './news/news.module').then(x=>x.NewsModule)
  },
  {
    path: 'news',
    loadChildren:()=> import( './news-content/news-content.module').then(x=>x.NewsContentModule)
  },
  {
    path: 'news/category',
    loadChildren:()=> import( './all-news/all-news.module').then(x=>x.AllNewsModule)
  },
  {
    path: 'about-us/.',
    loadChildren:()=> import( './about-us/about-us.module').then(x=>x.AboutUsModule)
  },
  {
    path: 'exams/.',
    loadChildren:()=> import( './exams/exams.module').then(x=>x.ExamsModule)
  },
  {
    path: 'exams',
    loadChildren:()=> import( './exam-content/exam-content.module').then(x=>x.ExamContentModule)
  },
  {
    path: 'contact-us/.',
    loadChildren:()=> import( './contact-us/contact-us.module').then(x=>x.ContactUsModule)
  },
  {
    path: 'neet-rank-predictor/.',
    loadChildren:()=> import( './neet-rank-predictor/neet-rank-predictor.module').then(x=>x.NeetRankPredictorModule)
  },
  {
    path: 'filter/.',
    loadChildren:()=> import( './filter/filter.module').then(x=>x.FilterModule)
  },
  {
    path: 'services/.',
    loadChildren:()=> import( './services/services.module').then(x=>x.ServicesModule)
  },
  {
    path: 'course/.',
    loadChildren:()=> import( './course/course.module').then(x=>x.CourseModule)
  },
  {
    path: 'course',
    loadChildren:()=> import( './course-content/course-content.module').then(x=>x.CourseContentModule)
  },
  {
    path: 'disclaimer/.',
    loadChildren:()=> import( './disclaimer/disclaimer.module').then(x=>x.DisclaimerModule)
  },
  {
    path: 'faq/.',
    loadChildren:()=> import( './faq/faq.module').then(x=>x.FaqModule)
  },
  {
    path: 'study-abroad/.',
    loadChildren:()=> import( './study-abroad/study-abroad.module').then(x=>x.StudyAbroadModule)
  },
  {
    path: 'study-in-australia/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },
  {
    path: 'study-in-usa/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },  {
    path: 'study-in-poland/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },  {
    path: 'study-in-belarus/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },  {
    path: 'study-in-russia/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },
  {
    path: 'study-in-china/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },
  {
    path: 'study-in-ukraine/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },  {
    path: 'study-in-ireland/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },  {
    path: 'study-in-uk/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },  {
    path: 'study-in-canada/.',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },


  {
    path: 'abroad-course/.',
    loadChildren:()=> import( './abroad-course/abroad-course.module').then(x=>x.AbroadCourseModule)
  },
  {
    path: 'college/.',
    loadChildren:()=> import( './college-filter/college-filter.module').then(x=>x.CollegeFilterModule)
  },
  {
    path: 'college',
    loadChildren:()=> import( './college-con/college-con.module').then(x=>x.CollegeConModule)
  },
  // {
  //   path: 'course-filter',
  //   loadChildren:()=> import( './course-filter/course-filter.module').then(x=>x.CourseFilterModule)
  // },
  // {
  //   path: 'exam-filter',
  //   loadChildren:()=> import( './exam-filter/exam-filter.module').then(x=>x.ExamFilterModule)
  // },
  {
    path: 'image-gallery/.',
    loadChildren:()=> import( './img-gallery/img-gallery.module').then(x=>x.ImgGalleryModule)
  },
  {
    path: 'video-gallery/.',
    loadChildren:()=> import( './video-gallery/video-gallery.module').then(x=>x.VideoGalleryModule)
  },
  {
    path: 'privacy/.',
    loadChildren:()=> import( './privacy/privacy.module').then(x=>x.PrivacyModule)
  },
  {
    path: 'india/.',
    loadChildren:()=> import( './university-filter/university-filter.module').then(x=>x.UniversityFilterModule)
  },
  {
    path: 'india/:link/.',
    loadChildren:()=> import( './university-filter/university-filter.module').then(x=>x.UniversityFilterModule)
  },
  {
    path: 'university',
    loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  },
  {
    path: 'thankyou-page/.',
    loadChildren:()=> import( './thankyou-page/thankyou-page.module').then(x=>x.ThankyouPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component:ErrorPComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
