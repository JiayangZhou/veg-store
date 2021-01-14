import { templateJitUrl } from '@angular/compiler';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  public casher : number = 0;
  public casherStatus : any[] = [0,1,2];
  // dom
  @ViewChild('cashier') cashier : any;
  constructor(public storage : StorageService) { }

  ngOnInit(): void {
    if (this.storage.get('orders') != null){
      this.orders = this.storage.get('orders');
    }
    if (this.storage.get('orderIDs')!=null){
      this.orderIDs = this.storage.get('orderIDs'); 
    }
    if (this.storage.get('orderInfo') != null){
      this.orderInfo = this.storage.get('orderInfo');
    }
    let id : number = this.orderInfo.orderId;

    if (!this.orderIDs.includes(id) && id != null){
      this.orderIDs.push(id);
      this.orders.push(this.orderInfo);
      this.storage.set('orders',this.orders); 
      this.storage.set('orderIDs',this.orderIDs);
    }
  }
  ngAfterViewInit() : void{
    console.log("view child loaded");
  }
  
  doChange(){
     this.storage.set('casherStatus',this.casher);
  }

}
