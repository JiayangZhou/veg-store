import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashiers',
  templateUrl: './cashiers.component.html',
  styleUrls: ['./cashiers.component.css']
})
export class CashiersComponent implements OnInit {

  name  = "Jiayang";

  constructor() { }

  ngOnInit(): void {
  }

}
