import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterRoutingModule } from './filter-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FilterComponent } from './filter.component';
import { TabViewModule } from 'primeng/tabview';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from "primeng/accordion";
@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    HeaderModule,
    FooterModule,
    TabViewModule,
    NgbModule,
    AccordionModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class FilterModule { }
