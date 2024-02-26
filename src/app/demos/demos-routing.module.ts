import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRoutingParamsComponent } from './components/demo-routing-params/demo-routing-params.component';

const routes: Routes = [
  {path:'routing-params', component:DemoRoutingParamsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
