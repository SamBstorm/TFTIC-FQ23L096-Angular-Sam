import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-demo-routing-params',
  templateUrl: './demo-routing-params.component.html',
  styleUrl: './demo-routing-params.component.scss'
})
export class DemoRoutingParamsComponent implements OnInit{

  currentRoute! : string;
  currentParam! : string;
  currentQueryParam! : string;

  constructor(private _activevatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.currentRoute = this.getUrl(this._activevatedRoute.snapshot);
  }

  private getUrl(snapshot : ActivatedRouteSnapshot) : string{
    let url = "";
    if(snapshot.parent) url = this.getUrl(snapshot.parent) +'/'+ snapshot.routeConfig?.path;
    return url;
  }

}
