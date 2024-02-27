import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FansService } from '../../services/fans.service';
import { IFans } from '../../models/ifans';
import { Router } from '@angular/router';
import { log } from 'console';
import { CustomValidators } from '../../../customValidators/custom.validators';

@Component({
  selector: 'app-fans-create',
  templateUrl: './fans-create.component.html',
  styleUrl: './fans-create.component.scss'
})
export class FansCreateComponent implements OnInit{
  
  createForm! : FormGroup;

  get seriesArrayForm() : FormArray{
    return this.createForm.get('series') as FormArray;
  } 
  
  constructor(
    private _fb : FormBuilder,
    private _fansService : FansService,
    private _router : Router
    ){}

  ngOnInit(): void {
    this.createForm = this._fb.group({
      name : [null,[Validators.required,Validators.minLength(2), Validators.maxLength(32)]],
      birthdate : [null, [Validators.required,CustomValidators.checkYearsOld(13)]],
      series : this._fb.array([])
    })
  }

  public onSubmit():void{
    console.log(this.createForm);     
    if(!this.createForm.valid) return;
    let fan : IFans ={
      id : 0,
      name : this.createForm.get('name')?.value,
      birthDate : this.createForm.get('birthdate')?.value,
      series : []
    }
    for (const arrayControl of this.seriesArrayForm.controls) {
      fan.series.push(arrayControl.value);
    }
    let id = this._fansService.insert(fan);
    this._router.navigate(['exos','fans-details',id]);
  }

  public addSerie() : void{
    this.seriesArrayForm.push(new FormControl(null, [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(32)
    ]));
  }

  public removeSerie(index : number) : void{
    this.seriesArrayForm.removeAt(index);
  }
}
