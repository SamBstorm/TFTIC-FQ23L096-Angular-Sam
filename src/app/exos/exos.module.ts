import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExosModule { }
