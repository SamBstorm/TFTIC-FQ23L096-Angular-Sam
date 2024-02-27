import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-routing-guard-home',
  templateUrl: './routing-guard-home.component.html',
  styleUrl: './routing-guard-home.component.scss'
})
export class RoutingGuardHomeComponent implements OnInit {
  userEmail : string | null = null;

  constructor(private _authService : AuthentificationService){}
  
  ngOnInit(): void {
    //C'est ici que nous vérifirons grâce au service si quelqu'un est connecté
    //et récupérer son email
    if(this._authService.isConnected) this.userEmail = this._authService.currentUserEmail;
  }
}
