import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Subscription, map, tap } from 'rxjs';

@Component({
  selector: 'app-routing-guard-nav',
  templateUrl: './routing-guard-nav.component.html',
  styleUrl: './routing-guard-nav.component.scss'
})
export class RoutingGuardNavComponent implements OnInit, OnDestroy {

  isConnected! : boolean
  private _subIsConnected! : Subscription

  constructor(private _authService : AuthentificationService){}
  
  public ngOnInit(): void {
    this._subIsConnected = this._authService.obsIsConnected
    // .pipe(
    //   tap((data : boolean) => console.log(data)),
    //   map((data : boolean) => {
    //       if(data) return 1; else return 0;
    //     }
    //   )
    .subscribe({
      next : (data : boolean) => this.isConnected = data,
      error : (error) => console.error(error),
      complete :() => console.log('récupéré')
    });
  }

  public ngOnDestroy(): void {
    this._subIsConnected.unsubscribe();
  }

  /*
   * avec plusieurs subscriptions
  private _subscribres! : Subscription[]

  constructor(private _authService : AuthentificationService){}
  
  public ngOnInit(): void {
    this._subscribres.push(this._authService.obsIsConnected.subscribe({
      next : (data : boolean) => this.isConnected = data,
      error : (error) => console.error(error),
      complete :() => console.log('récupéré')
    }));
  }

  public ngOnDestroy(): void {
    this._subscribres.forEach(sub => sub.unsubscribe());
  }
  */
}
