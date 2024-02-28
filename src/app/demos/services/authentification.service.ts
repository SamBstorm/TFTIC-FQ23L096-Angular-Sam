import { IUser } from './../models/iuser';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';

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

  
  public get isConnected() : boolean {
    return this.currentUser != null;
  }
  
  constructor(private _session : SessionStorageService){
    this.currentUser = this._session.getItem(this._sessionKey)
  }

  public login(login : IUser) : boolean{
    if(this._users.find( user => user.email == login.email && user.password == login.password)){
          this.currentUser =  { email : login.email, password : '********'};
          this._session.setItem(this._sessionKey,this.currentUser);
    }
    return this.isConnected;
  }

  public logout(): void{
    this.currentUser = null;
    this._session.removeItem(this._sessionKey);
  }
}
