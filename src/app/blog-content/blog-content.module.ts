import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogContentRoutingModule } from './blog-content-routing.module';
import { BlogContentComponent } from './blog-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { AccordionModule } from 'primeng/accordion';
import {Location} from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [BlogContentComponent],
  imports: [
    CommonModule,
    BlogContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    ChatModule,
    FormsModule, ReactiveFormsModule,
    DialogModule
  ]
})
export class BlogContentModule { }
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
