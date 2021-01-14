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
    orderDetail : [],
    orderId : '0'
  }

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    if (this.storage.get('orderInfo') != null){
      this.orderInfo = this.storage.get('orderInfo');
    }
    // this is talking with the component called search
    if (this.storage.get('orderInfo') != null){
      this.orderInfo.orderDetail = this.storage.get('historyList');
    }
  }

  doSubmit(){
    console.log(this.orderInfo);
    this.orderInfo.orderId++;
    this.storage.set('orderInfo',this.orderInfo);
    
  }

}
