import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private _users : any[] = [
    {email: 'samuel.legrain@bstorm.be', password : 'Test1234='},
    {email: 'admin@admin', password : 'administrator'}
  ];

  currentUserEmail : string | null = null;

  public get isConnected() : boolean {
    return this.currentUserEmail != null;
  }

  constructor() { }

  public login(email : string, password : string) : boolean{
    if(this._users.find(user => user.email == email && user.password ==password)){
      this.currentUserEmail = email;
    }
    return this.isConnected;
  }

  public logout(): void{
    this.currentUserEmail = null;
  }
}
