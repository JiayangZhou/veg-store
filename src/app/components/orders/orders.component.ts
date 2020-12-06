import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../services/storage.service';

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
    city: 'Stockholm',
    orderDetail : []
  }

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    this.orderInfo.orderDetail = this.storage.get('historyList');
  }

  doSubmit(){
    console.log(this.orderInfo);
  }

}
