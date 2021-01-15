import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public title : string = "food world";
  public description : string = "go back to home page";
  public topBar : Array<string> = ['user','cart'];
  public attr:string = 'blue';
  public topBarList : any[] = [{
    tag: 'home',
    descrp : 'home'
  },{
    tag: 'product',
    descrp : 'product'
  },{
    tag: 'user',
    descrp : 'user'
  },
  {
    tag: 'cart',
    descrp : 'cart'
  }]
  public flag : boolean = true;

  @ViewChild('myHome') myHome : any
  constructor(public storage : StorageService) {

  }

  ngOnInit(): void {
    

  }
  
  ngAfterViewInit(): void{
    //let oBox : any = document.getElementById('box');

    this.myHome.nativeElement.style.height = '100px';
    this.myHome.nativeElement.style.width = '100px';
    this.myHome.nativeElement.style.background = 'pink';
  }
  
  run() : void{
    console.log("this is run function from categories");
  }
}
