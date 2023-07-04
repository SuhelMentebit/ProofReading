import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyAbroadRoutingModule } from './study-abroad-routing.module';
import { StudyAbroadComponent } from './study-abroad.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { OwlModule } from 'ngx-owl-carousel';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [StudyAbroadComponent],
  imports: [
    CommonModule,
    StudyAbroadRoutingModule,
    HeaderInnerModule,
    FooterModule,
    OwlModule,
    ChatModule
  ]
})
export class StudyAbroadModule { }
