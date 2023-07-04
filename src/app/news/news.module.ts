import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { FooterModule } from '../footer/footer.module';
// import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChatModule } from '../chat/chat.module';
import {Location} from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FooterModule,
    // HeaderInnerModule,
    RouterModule,
    CarouselModule ,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class NewsModule { }
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

