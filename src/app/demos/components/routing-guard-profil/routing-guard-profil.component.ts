import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-guard-profil',
  templateUrl: './routing-guard-profil.component.html',
  styleUrl: './routing-guard-profil.component.scss'
})
export class RoutingGuardProfilComponent implements OnInit{

  user! : IUser;

  constructor(
    private _activatedRoute : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.user = this._activatedRoute.snapshot.data['user_data'];
  }
}
