import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FansListComponent } from './components/fans-list/fans-list.component';
import { FansDetailsComponent } from './components/fans-details/fans-details.component';
import { FansCreateComponent } from './components/fans-create/fans-create.component';
import { FansUpdateComponent } from './components/fans-update/fans-update.component';


@NgModule({
  declarations: [
    LoginComponent,
    FansListComponent,
    FansDetailsComponent,
    FansCreateComponent,
    FansUpdateComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule
  ]
})
export class ExosModule { }
