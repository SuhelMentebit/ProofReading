import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat.component';

import { FooterModule } from '../footer/footer.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { TabViewModule } from 'primeng/tabview';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryModule } from 'ng-gallery';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavModule } from '../nav/nav.module';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Location} from '@angular/common';  
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FooterModule,
    HeaderInnerModule,
    TabViewModule,
    NgxGalleryModule,
    OwlModule,
    AccordionModule,
    NgbCollapseModule,
    // GalleriaModule,
    NavModule,
    DialogModule,
    HttpClientModule,
    CarouselModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
