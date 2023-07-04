import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderInnerRoutingModule } from './header-inner-routing.module';
import { HeaderInnerComponent } from './header-inner.component';


@NgModule({
  declarations: [HeaderInnerComponent],
  imports: [
    CommonModule,
    HeaderInnerRoutingModule
  ],
  exports : [HeaderInnerComponent]
})
export class HeaderInnerModule { }
