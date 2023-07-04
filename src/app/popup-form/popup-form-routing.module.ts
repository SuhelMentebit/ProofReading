import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankyouPageComponent } from '../thankyou-page/thankyou-page.component';

const routes: Routes = [
  { path: 'thankyou-page/.', component: ThankyouPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupFormRoutingModule { }
