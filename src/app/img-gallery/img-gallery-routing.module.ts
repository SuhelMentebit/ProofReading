import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgGalleryComponent } from './img-gallery.component';


const routes: Routes = [
  {
    path:'',
    component:ImgGalleryComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgGalleryRoutingModule { }
