import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseFilterRoutingModule } from './course-filter-routing.module';
import { CourseFilterComponent } from './course-filter.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CourseFilterComponent],
  imports: [
    CommonModule,
    CourseFilterRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CourseFilterModule { }
