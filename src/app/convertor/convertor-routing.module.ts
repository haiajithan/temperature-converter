import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertorComponent } from './convertor/convertor.component';

const routes: Routes = [
  {
    path: '',
    component: ConvertorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertorRoutingModule { }
