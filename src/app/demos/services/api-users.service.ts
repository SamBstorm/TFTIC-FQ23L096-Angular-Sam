import { IUser } from './../models/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  private _url : string = "http://localhost:5185/users/"

  constructor(private _http : HttpClient) { }

  public getAll() : Observable<IUser[]>{
    return this._http.get<IUser[]>(this._url);
  }

  public get(id : number) : Observable<IUser>{
    return this._http.get<IUser>(this._url + id);
  }

  public delete(id : number) : void {
    this._http.delete(this._url + id);
  }

  public update(id : number, data : IUser) : void{
    this._http.put(this._url + id, data);
  }

  public create(data : IUser) : Observable<number>{
    return this._http.post<IUser>(this._url, data)
      .pipe(
        map((data : IUser) => data.id as number)
      )
  }
  
  public check(data : IUser) : Observable<IUser>{
    return this._http.post<IUser>(this._url+'CheckLogin/',data);
  }
}
