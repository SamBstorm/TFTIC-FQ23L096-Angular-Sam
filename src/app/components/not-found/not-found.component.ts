import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{

  seconds : number = 30;
  constructor(private _router : Router){}
  
  ngOnInit(): void {
    setInterval(
      () => this.seconds--,
      1000
    );
    setTimeout(
      () => this._router.navigate(['/'])
      ,this.seconds * 1000);
  }


}
