import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component : HomeComponent, pathMatch : "full"},
  {path: 'exos', loadChildren: () => import('./exos/exos.module').then(m => m.ExosModule)},
  {path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)},
  {path: 'notFound', component : NotFoundComponent},
  {path: '**', redirectTo : 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
