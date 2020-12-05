import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashiers',
  templateUrl: './cashiers.component.html',
  styleUrls: ['./cashiers.component.scss']
})
export class CashiersComponent implements OnInit {

  public name : string = "Jiayang";
  public cashierInfo : object = {
    name : "xxx",
    age : '25'
  }
  public isOnline : number = 1;
  public today : any = new Date;

  constructor() { 
    console.log(this.today);
  }

  ngOnInit(): void {
  }
}
