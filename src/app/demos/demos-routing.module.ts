import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRoutingParamsComponent } from './components/demo-routing-params/demo-routing-params.component';
import { RoutingGuardHomeComponent } from './components/routing-guard-home/routing-guard-home.component';
import { RoutingGuardLoginComponent } from './components/routing-guard-login/routing-guard-login.component';
import { RoutingGuardLogoutComponent } from './components/routing-guard-logout/routing-guard-logout.component';
import { mustBeAnonymous, mustBeLogged } from './guards/can-activate.guard';

const routes: Routes = [
  {path:'routing-params/:id', component:DemoRoutingParamsComponent},
  {path:'routing-guard-home', component : RoutingGuardHomeComponent},
  {path:'routing-guard-login', component : RoutingGuardLoginComponent, canActivate : [mustBeAnonymous]},
  {path:'routing-guard-logout', component : RoutingGuardLogoutComponent, canActivate : [mustBeLogged]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
