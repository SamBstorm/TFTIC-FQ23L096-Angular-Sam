import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../customValidators/custom.validators';
import { IUser } from '../../models/iuser';
import { ApiUsersService } from '../../services/api-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-guard-register',
  templateUrl: './routing-guard-register.component.html',
  styleUrl: './routing-guard-register.component.scss'
})
export class RoutingGuardRegisterComponent implements OnInit{

  registerForm! : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _api : ApiUsersService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [
        Validators.required, 
        CustomValidators.haveNumber(1), 
        CustomValidators.haveLowerCase(1), 
        CustomValidators.haveUpperCase(1), 
        CustomValidators.haveSpecialCharacter(1), 
        Validators.maxLength(32)]],
      confirm : [null, [
        Validators.required, 
        CustomValidators.haveNumber(1), 
        CustomValidators.haveLowerCase(1), 
        CustomValidators.haveUpperCase(1), 
        CustomValidators.haveSpecialCharacter(1), 
        Validators.maxLength(32)
      ]],
      consent : [false, [Validators.required]]
    });
  }

  public onSubmit() : void{
    console.log(this.registerForm);
    
    if(!this.registerForm.valid) return;
    let user : IUser = {
      id : undefined,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password
    }
    this._api.create(user).subscribe({
      next : (id : number) => this._router.navigate(['demos','routing-guard','login'])
    })
  }

}
