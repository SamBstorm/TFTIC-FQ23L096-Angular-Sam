import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoRoutingParamsComponent } from './components/demo-routing-params/demo-routing-params.component';
import { RoutingGuardHomeComponent } from './components/routing-guard-home/routing-guard-home.component';
import { RoutingGuardLoginComponent } from './components/routing-guard-login/routing-guard-login.component';
import { RoutingGuardLogoutComponent } from './components/routing-guard-logout/routing-guard-logout.component';
import { SharedModule } from '../shared/shared.module';
import { RoutingGuardNavComponent } from './components/routing-guard-nav/routing-guard-nav.component';
import { RoutingGuardMainComponent } from './components/routing-guard-main/routing-guard-main.component';
import { RoutingGuardRegisterComponent } from './components/routing-guard-register/routing-guard-register.component';
import { RoutingGuardProfilComponent } from './components/routing-guard-profil/routing-guard-profil.component';


@NgModule({
  declarations: [
    DemoRoutingParamsComponent,
    RoutingGuardHomeComponent,
    RoutingGuardLoginComponent,
    RoutingGuardLogoutComponent,
    RoutingGuardNavComponent,
    RoutingGuardMainComponent,
    RoutingGuardRegisterComponent,
    RoutingGuardProfilComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule
  ]
})
export class DemosModule { }
