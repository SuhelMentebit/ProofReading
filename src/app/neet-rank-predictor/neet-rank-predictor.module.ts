import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeetRankPredictorRoutingModule } from './neet-rank-predictor-routing.module';
import { NeetRankPredictorComponent } from './neet-rank-predictor.component';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  declarations: [NeetRankPredictorComponent],
  imports: [
    CommonModule,
    NeetRankPredictorRoutingModule,
    FooterModule,
    ChatModule
  ]
})
export class NeetRankPredictorModule { }
