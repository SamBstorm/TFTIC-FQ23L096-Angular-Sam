import { Injectable } from '@angular/core';
import { IUser } from '../../models/iuser';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiUsersService } from '../api-users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<IUser> {

  constructor(
    private _api : ApiUsersService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    const id : number = route.params['id'];
    return this._api.get(id);
  }
}
