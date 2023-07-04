import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbroadCourseRoutingModule } from './abroad-course-routing.module';
import { AbroadCourseComponent } from './abroad-course.component';
// import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module'
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { OwlCarousel, OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [AbroadCourseComponent],
  imports: [
    CommonModule,
    AbroadCourseRoutingModule,
    // HeaderInnerModule,
    ChatModule,
    FooterModule,
    TabViewModule,
    AccordionModule,
    OwlModule
  ]
})
export class AbroadCourseModule { }
