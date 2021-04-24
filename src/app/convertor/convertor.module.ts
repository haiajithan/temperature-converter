
import { TempConverterPipe } from './../directive/temp-convertor.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertorRoutingModule } from './convertor-routing.module';
import { ConvertorComponent } from './convertor/convertor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ConvertorComponent, TempConverterPipe],
  imports: [
    CommonModule,
    ConvertorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   FormsModule
  ],
  providers: []
})
export class ConvertorModule { }
