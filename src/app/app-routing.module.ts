import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglelayoutComponent } from './layout/singlelayout/singlelayout.component';

const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home', component: SinglelayoutComponent, data: { title: '' },
    children: [
      {
        path: '',
        loadChildren: () => import('./convertor/convertor.module').then(m => m.ConvertorModule)
      },

    ]

  }

];



@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
