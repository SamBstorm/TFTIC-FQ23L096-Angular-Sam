import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public setItem<T>(key : string, value : T ) : void{
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key : string) : T | null{
    return JSON.parse(sessionStorage.getItem(key) ?? 'null');
  }

  public removeItem(key : string) : void {
    sessionStorage.removeItem(key);
  }

  public clear() : void{
    sessionStorage.clear();
  }
}
