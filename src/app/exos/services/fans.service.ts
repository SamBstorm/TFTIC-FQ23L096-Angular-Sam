import { Injectable } from '@angular/core';
import { IFans } from '../models/ifans';

@Injectable({
  providedIn: 'root'
})
export class FansService {

  private _fans : IFans[] = 
    [
      {
        id:1,
        name : "Samuel Legrain", 
        birthDate : new Date(1987,8,27), 
        series : [
          "How I meet your mother",
          "Loki",
          "Obi-wan"
        ]
      }
    ];

  constructor() { }

  public getAll() : IFans[]{
    return [...this._fans];
  }

  public get(id : number) : IFans{
    const fan : IFans |undefined = this._fans.find(f=>f.id == id);
    if(fan == undefined) throw new Error(`id : ${id} ; out of range.`);
    return fan as IFans;
  }

  public insert(fan : IFans) : number{
    let idmax : number = Math.max(...this._fans.map(f => f.id)) + 1;
    fan.id = idmax;
    this._fans.push(fan);
    return idmax;
  }

  
  public update(id : number, fan : IFans) : void{
    const fan_old : IFans |undefined = this._fans.find(f=>f.id == id);
    if(fan_old == undefined) throw new Error(`id : ${id} ; out of range.`);
    fan_old.name = fan.name;
    fan_old.birthDate = fan.birthDate;
    fan_old.series = fan.series;
  }
}
