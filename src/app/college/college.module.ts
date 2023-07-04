import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { CollegeComponent } from './college.component';
import { TabViewModule } from 'primeng/tabview';
// import { NgxGalleryModule } from 'ngx-gallery';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryModule } from 'ng-gallery';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// import {GalleriaModule} from 'primeng/components/galleria/galleria';
import { NavModule } from '../nav/nav.module';
import { DialogModule } from 'primeng/dialog';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ChatModule } from '../chat/chat.module';
import {Location} from '@angular/common';  

@NgModule({
  declarations: [CollegeComponent],
  imports: [
    CommonModule,
    CollegeRoutingModule,
    FooterModule,
    HeaderInnerModule,
    TabViewModule,
    NgxGalleryModule,
    OwlModule,
    AccordionModule,
    NgbCollapseModule,
    GalleryModule,
    NavModule,
    DialogModule,
    ChatModule
    // ShareButtonsModule.forRoot(),
    // ShareIconsModule,
  ],
  providers: [GalleryModule],
})
export class CollegeModule { }
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
