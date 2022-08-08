import { BrowserModule } from '@angular/platform-browser';
import { ServiciosDigitalesComponent } from '../zone/serviciosDigitales/serviciosDigitales.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AjaxService } from '../providers/ajax.service';

import { DemoMaterialModule } from './demo-material-module';

@NgModule({
  entryComponents:[
    ServiciosDigitalesComponent
  ],
  declarations: [
    AppComponent,
    ServiciosDigitalesComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
