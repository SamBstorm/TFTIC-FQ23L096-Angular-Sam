import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoRoutingParamsComponent } from './components/demo-routing-params/demo-routing-params.component';


@NgModule({
  declarations: [
    DemoRoutingParamsComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
