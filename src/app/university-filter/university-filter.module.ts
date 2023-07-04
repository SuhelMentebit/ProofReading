import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityFilterRoutingModule } from './university-filter-routing.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { UniversityFilterComponent } from './university-filter.component';
import { ChatModule } from '../chat/chat.module';
import {Location} from '@angular/common';  


@NgModule({
  declarations: [UniversityFilterComponent],
  imports: [
    CommonModule,
    UniversityFilterRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    FormsModule, 
    ReactiveFormsModule,
    ChatModule
  ]
})
export class UniversityFilterModule { }
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
