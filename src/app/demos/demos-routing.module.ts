import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRoutingParamsComponent } from './components/demo-routing-params/demo-routing-params.component';
import { RoutingGuardHomeComponent } from './components/routing-guard-home/routing-guard-home.component';
import { RoutingGuardLoginComponent } from './components/routing-guard-login/routing-guard-login.component';
import { RoutingGuardLogoutComponent } from './components/routing-guard-logout/routing-guard-logout.component';
import { mustBeAnonymous, mustBeLogged } from './guards/can-activate.guard';
import { RoutingGuardMainComponent } from './components/routing-guard-main/routing-guard-main.component';

const routes: Routes = [
  {path:'routing-params/:id', component:DemoRoutingParamsComponent},
  {path:'routing-guard', component : RoutingGuardMainComponent, children: [
    {path:'', redirectTo: 'home', pathMatch : 'full'},
    {path:'home', component : RoutingGuardHomeComponent},
    {path:'login', component : RoutingGuardLoginComponent, canActivate : [mustBeAnonymous]},
    {path:'logout', component : RoutingGuardLogoutComponent, canActivate : [mustBeLogged]}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
