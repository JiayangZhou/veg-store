import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashiers',
  templateUrl: './cashiers.component.html',
  styleUrls: ['./cashiers.component.css']
})
export class CashiersComponent implements OnInit {

  public name : string = "Jiayang";

  public cashierInfo : object = {
    name : "mili",
    age : '25'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
