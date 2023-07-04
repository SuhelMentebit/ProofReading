import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { HeaderModule } from '../header/header.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    ChatModule,
    FormsModule
  ]
})
export class ContactUsModule { }
