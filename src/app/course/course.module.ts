import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import {Location} from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FooterModule,
    HeaderInnerModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CourseModule { }
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
};  

