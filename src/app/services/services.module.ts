import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    HeaderInnerModule,
    FooterModule,
    ChatModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ServicesModule { }
