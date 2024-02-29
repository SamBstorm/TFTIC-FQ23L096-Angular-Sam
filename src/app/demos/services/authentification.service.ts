import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiUsersService } from './api-users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private _sessionKey : string = "auth";

  currentUser : IUser | null;

  obsIsConnected : BehaviorSubject<boolean>;
  
  private _isConnected : boolean;
  
  constructor(
    private _session : SessionStorageService,
    private _api : ApiUsersService
    ){
    this.currentUser = this._session.getItem(this._sessionKey);
    this._isConnected = Boolean(this.currentUser);
    this.obsIsConnected = new BehaviorSubject<boolean>(this._isConnected);
  }

  public login(login : IUser) : Subscription{
    return this._api.check(login).subscribe({
      next : (data : IUser) => {
        this.currentUser = data;          
        this._isConnected = true;
        this.obsIsConnected.next(this._isConnected);
        this._session.setItem(this._sessionKey,this.currentUser);
      },
      error : (error) => console.error(error)
    });    
  }

  public logout(): void{
    this.currentUser = null;
    this._isConnected = false;
    this.obsIsConnected.next(this._isConnected);
    this._session.removeItem(this._sessionKey);
  }
}
