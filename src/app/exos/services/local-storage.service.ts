import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem<T>(key : string, value : T) : void{
    localStorage.setItem(key,JSON.stringify(value));
  }

  public getItem<T>(key : string) : T | null{
    return JSON.parse(localStorage.getItem(key) ?? 'null');
  }

  public removeItem(key : string) : void {
    localStorage.removeItem(key);
  }

  public clear() : void{
    localStorage.clear();
  }
}
