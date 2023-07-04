import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBlogsRoutingModule } from './all-blogs-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { AllBlogsComponent } from './all-blogs.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllBlogsComponent],
  imports: [
    CommonModule,
    AllBlogsRoutingModule,
    FooterModule,
    ChatModule,
    AccordionModule,
    HeaderInnerModule,
    OwlModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AllBlogsModule { }
