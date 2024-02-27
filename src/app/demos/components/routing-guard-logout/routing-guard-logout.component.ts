import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-routing-guard-logout',
  templateUrl: './routing-guard-logout.component.html',
  styleUrl: './routing-guard-logout.component.scss'
})
export class RoutingGuardLogoutComponent {

  constructor(
    private _router : Router,
    private _authService : AuthentificationService){}

  public validate(){
    this._authService.logout();
    this._router.navigate(['demos','routing-guard-login']);
  }
  
  public cancel(){
    this._router.navigate(['demos','routing-guard-home']);
  }
}
