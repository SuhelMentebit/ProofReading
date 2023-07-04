import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamFilterRoutingModule } from './exam-filter-routing.module';
import { ExamFilterComponent } from './exam-filter.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExamFilterComponent],
  imports: [
    CommonModule,
    ExamFilterRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExamFilterModule { }
