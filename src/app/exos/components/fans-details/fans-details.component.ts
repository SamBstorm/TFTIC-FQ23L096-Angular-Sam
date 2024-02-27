import { Component, OnInit } from '@angular/core';
import { IFans } from '../../models/ifans';
import { FansService } from '../../services/fans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fans-details',
  templateUrl: './fans-details.component.html',
  styleUrl: './fans-details.component.scss'
})
export class FansDetailsComponent implements OnInit{
  
  fan! : IFans;
  id! :number; 
  
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _fansService : FansService
  ){}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.fan = this._fansService.get(this.id);
  }

}
