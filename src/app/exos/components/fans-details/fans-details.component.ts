import { Component, OnInit } from '@angular/core';
import { IFans } from '../../models/ifans';
import { FansService } from '../../services/fans.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private _fansService : FansService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    try{
      this.fan = this._fansService.get(this.id);
    }
    catch{
      this._router.navigate(['notFound']);
    }
  }

}
