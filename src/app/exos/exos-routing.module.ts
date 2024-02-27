import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FansListComponent } from './components/fans-list/fans-list.component';
import { FansDetailsComponent } from './components/fans-details/fans-details.component';
import { FansUpdateComponent } from './components/fans-update/fans-update.component';
import { FansCreateComponent } from './components/fans-create/fans-create.component';

const routes: Routes = [
  {path :'login', component : LoginComponent},
  {path : 'fans-list', component : FansListComponent },
  {path : 'fans-create', component : FansCreateComponent },
  {path : 'fans-edit/:id', component : FansUpdateComponent },
  {path : 'fans-details/:id', component : FansDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
