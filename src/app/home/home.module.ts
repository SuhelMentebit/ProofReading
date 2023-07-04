import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CarouselModule  } from 'ngx-owl-carousel-o';
import { TabViewModule } from 'primeng/tabview'
import { HeaderModule } from '../header/header.module';
import { NavModule } from '../nav/nav.module';
import { ModalModule } from 'ngx-bootstrap/modal';
 import { PopupFormComponent } from '../popup-form/popup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
//import {MatCardModule} from '@angular/material/card';
import { ChatModule } from '../chat/chat.module';
import { FormComponent } from '../form/form.component'



@NgModule({
  declarations: [
    HomeComponent,
    PopupFormComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule ,
    TabViewModule,
    FooterModule,
    HeaderModule,
    NavModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    //MatCardModule,
    ChatModule
    
  ],
})
export class HomeModule { }
