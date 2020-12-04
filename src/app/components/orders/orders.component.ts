import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orderInfo : any ={
    customer : 'default',
    gender : '1',
    citiesList : ['Stokcholm','Malmo','Gothenburg'],
    city: 'Stockholm'
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log(this.orderInfo);
  }

}
