import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupFormRoutingModule } from './popup-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PopupFormModule { }
