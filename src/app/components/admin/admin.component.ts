import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public orderInfo : any ={
    customer : 'default',
    gender : '',
    citiesList : ['Stokcholm','Malmo','Gothenburg'],
    city: '',
    orderDetail : [],
    orderId : '1'
  }
  public orders : any[] = [];
  public orderIDs : any[] = [];
  constructor(public storage : StorageService) { }

  ngOnInit(): void {
    this.orders = this.storage.get('orders');
    this.orderIDs = this.storage.get('orderIDs');
    this.orderInfo = this.storage.get('orderInfo');
    let id : number = this.orderInfo.orderId;
    if (!this.orderIDs.includes(id) && id != null){
      this.orderIDs.push(id);
      this.orders.push(this.orderInfo);
      this.storage.set('orders',this.orders); 
      this.storage.set('orderIDs',this.orderIDs);
    }
  }

}
