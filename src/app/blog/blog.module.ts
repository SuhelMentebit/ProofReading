import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HeaderInnerModule } from '../header-inner/header-inner.module';
//import {Location} from '@angular/common';  



@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FooterModule,
    // HeaderInnerModule,
    CarouselModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ],
  exports:[BlogComponent]
})
export class BlogModule { }
// const __stripTrailingSlash = (Location as any).stripTrailingSlash;  
// Location.stripTrailingSlash = function (url) {  
//   if (url.endsWith('/')) {  
//     url=url;  
//   }  
//   else {  
//     url=url+'/';  
//   }  
//   const queryString$ = url.match(/([^?]*)?(.*)/);  
//   if (queryString$[2].length > 0) {  
//     return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);  
//   }  
//   return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);  
// };  