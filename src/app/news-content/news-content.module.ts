import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsContentRoutingModule } from './news-content-routing.module';
import { NewsContentComponent } from './news-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { ChatModule } from '../chat/chat.module';
import {Location} from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsContentComponent],
  imports: [
    CommonModule,
    NewsContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    DialogModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class NewsContentModule { }
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

