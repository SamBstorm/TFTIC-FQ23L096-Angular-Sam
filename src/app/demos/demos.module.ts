import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoRoutingParamsComponent } from './components/demo-routing-params/demo-routing-params.component';
import { RoutingGuardHomeComponent } from './components/routing-guard-home/routing-guard-home.component';
import { RoutingGuardLoginComponent } from './components/routing-guard-login/routing-guard-login.component';
import { RoutingGuardLogoutComponent } from './components/routing-guard-logout/routing-guard-logout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemoRoutingParamsComponent,
    RoutingGuardHomeComponent,
    RoutingGuardLoginComponent,
    RoutingGuardLogoutComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule
  ]
})
export class DemosModule { }
