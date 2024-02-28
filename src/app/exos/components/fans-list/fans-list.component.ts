import { Component, OnInit } from '@angular/core';
import { IFans } from '../../models/ifans';
import { FansService } from '../../services/fans.service';
import test from 'node:test';

@Component({
  selector: 'app-fans-list',
  templateUrl: './fans-list.component.html',
  styleUrl: './fans-list.component.scss'
})
export class FansListComponent implements OnInit{
  
  fans : IFans[] = []
  
  constructor(private _fansService : FansService){}

  ngOnInit(): void {
    this.fans = this._fansService.getAll();
    // ! Test pour le Guard CanActivate
    // this.fans.push({name : 'test', birthDate: new Date, id : 100, series : []})
  }
}
