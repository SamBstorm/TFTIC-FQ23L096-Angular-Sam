import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-routing-guard-home',
  templateUrl: './routing-guard-home.component.html',
  styleUrl: './routing-guard-home.component.scss'
})
export class RoutingGuardHomeComponent implements OnInit {
  userEmail : string | undefined = undefined;

  constructor(private _authService : AuthentificationService){}
  
  ngOnInit(): void {
    //C'est ici que nous vérifirons grâce au service si quelqu'un est connecté
    //et récupérer son email
    //if(this._authService._isConnected) this.userEmail = this._authService.currentUser?.email;

    /*
     * ! Attention, observable inutile car mise à jour non nécessaire du userEmail
    this._authService.obsIsConnected.subscribe({
      next : (data : boolean) => {
        if(data) 
          this.userEmail = this._authService.currentUser!.email;
        else 
          this.userEmail = undefined;
        },
      error : (error) => console.error(error)
    });
    */
    this.userEmail = this._authService.currentUser?.email;
  }
}
