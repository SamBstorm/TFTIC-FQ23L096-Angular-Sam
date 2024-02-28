import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private _sessionKey : string = "auth";

  private _users : IUser[] = [
    {email: 'samuel.legrain@bstorm.be', password : 'Test1234='},
    {email: 'admin@admin', password : 'administrator'}
  ];

  currentUser : IUser | null;

  obsIsConnected : BehaviorSubject<boolean>;
  
  private _isConnected : boolean;
  
  constructor(private _session : SessionStorageService){
    this.currentUser = this._session.getItem(this._sessionKey);
    this._isConnected = Boolean(this.currentUser);
    this.obsIsConnected = new BehaviorSubject<boolean>(this._isConnected);
  }

  public login(login : IUser) : boolean{
    if(this._users.find( user => user.email == login.email && user.password == login.password)){
          this.currentUser =  { email : login.email, password : '********'};          
          this._isConnected = true;
          this.obsIsConnected.next(this._isConnected);
          this._session.setItem(this._sessionKey,this.currentUser);
    }
    return this._isConnected;
  }

  public logout(): void{
    this.currentUser = null;
    this._isConnected = false;
    this.obsIsConnected.next(this._isConnected);
    this._session.removeItem(this._sessionKey);
  }
}
