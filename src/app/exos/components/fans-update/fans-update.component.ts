import { Component, OnInit } from '@angular/core';
import { IFans } from '../../models/ifans';
import { ActivatedRoute, Router } from '@angular/router';
import { FansService } from '../../services/fans.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fans-update',
  templateUrl: './fans-update.component.html',
  styleUrl: './fans-update.component.scss'
})
export class FansUpdateComponent  implements OnInit{
  
  fan! : IFans;
  id! : number; 
  seriesForm! : FormGroup;
  
  get seriesArrayForm() : FormArray{
    return this.seriesForm.get('series') as FormArray;
  } 

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _fansService : FansService,
    private _fb : FormBuilder,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.fan = this._fansService.get(this.id);
    this.seriesForm = this._fb.group({
      series : this._fb.array([])
    })
    for (const serie of this.fan.series) {
      this.addSerie(serie)
    }
  }

  public onSubmit(){
    console.log(this.seriesForm);
    
    if(!this.seriesForm.valid) return;
    this.fan.series = [];
    for (const arrayControl of this.seriesArrayForm.controls) {
      this.fan.series.push(arrayControl.value);
    }
    this._fansService.update(this.id,this.fan);
    this._router.navigate(['exos','fans-details',this.id]);

  }

  public addSerie(value? : string) : void{
    this.seriesArrayForm.push(new FormControl(value, [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(32)
    ]));
  }

  public removeSerie(index : number) : void{
    this.seriesArrayForm.removeAt(index);
  }

}
