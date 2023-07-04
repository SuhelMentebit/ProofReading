import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNewsRoutingModule } from './all-news-routing.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { AccordionModule } from 'primeng/accordion';
import { AllNewsComponent } from './all-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllNewsComponent],
  imports: [
    CommonModule,
    AllNewsRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AllNewsModule { }
