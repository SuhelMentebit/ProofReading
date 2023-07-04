import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyContentRoutingModule } from './study-content-routing.module';
import { StudyContentComponent } from './study-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { AccordionModule } from 'primeng/accordion';
// import { NgxGalleryModule } from 'ngx-gallery';
import { ChatModule } from '../chat/chat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudyContentComponent],
  imports: [
    CommonModule,
    StudyContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    CarouselModule,
    AccordionModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
    // NgxGalleryModule
  ]
})
export class StudyContentModule { }
