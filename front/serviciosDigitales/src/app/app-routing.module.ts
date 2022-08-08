import { NgModule } from '@angular/core';
import { ServiciosDigitalesComponent } from '../zone/serviciosDigitales/serviciosDigitales.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServiciosDigitalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
