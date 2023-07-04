import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentRoutingModule } from './course-content-routing.module';
import { CourseContentComponent } from './course-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ChatModule } from '../chat/chat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Location} from '@angular/common';  

@NgModule({
  declarations: [CourseContentComponent],
  imports: [
    CommonModule,
    CourseContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    TabViewModule,
    AccordionModule,
    NgbCollapseModule,
    NgxGalleryModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CourseContentModule { }
const __stripTrailingSlash = (Location as any).stripTrailingSlash;  
Location.stripTrailingSlash = function (url) {  
  if (url.endsWith('/')) {  
    url=url;  
  }  
  else {  
    url=url+'/';  
  }  
  const queryString$ = url.match(/([^?]*)?(.*)/);  
  if (queryString$[2].length > 0) {  
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);  
  }  
  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);  
}
