import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../../../customValidators/custom.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  errorMessage : string | null = null;

  loginForm! : FormGroup;

  constructor(private _fb : FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this._fb.group(
      {
        loginEmail : [null,[Validators.required, Validators.email]],
        loginPassword : [null,[
          Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(32), 
          CustomValidators.haveNumber(1), 
          CustomValidators.haveLowerCase(1), 
          CustomValidators.haveUpperCase(1), 
          CustomValidators.haveSpecialCharacter(1)
        ]]
      }
    );
  }

  public onSubmit():void{
    if(!this.loginForm.valid) {
      this.errorMessage = "Veuillez vérifier les données."
      return;
    }
    //appel du service d'authentification avec le formulaire correct👍
    console.log(this.loginForm);
  }

  public getError(formControlName : string, validatorName : string) : string |any {
    return this.loginForm.get(formControlName)?.getError(validatorName);
  }

  /*public haveNumberValidator() : ValidatorFn | null{
    return (control : AbstractControl) : null | any => {
      const value : string = control.value;
      if(value === null) return null;
      if(value.match(/[0-9]/g)) return null;
      return {haveNumberValidator : {
          message : "Il faut au minimum 1 caractère numérique",
          requiredCount : 1,
          actualCount : 0
        }
      };
    }
  }*/
}
