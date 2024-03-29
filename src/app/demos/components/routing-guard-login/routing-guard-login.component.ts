import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-routing-guard-login',
  templateUrl: './routing-guard-login.component.html',
  styleUrl: './routing-guard-login.component.scss'
})
export class RoutingGuardLoginComponent implements OnInit {

  loginForm! : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _authService : AuthentificationService
    ){}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]]
    });
  }

  public onSubmit() : void{
    if(!this.loginForm.valid) return;
    let newUser : IUser = {
      id : undefined,
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }
    this._authService.login(newUser)
      .add(()=> this._router.navigate(['demos','routing-guard','home']));
  }

}
