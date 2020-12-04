import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public title : string = "food world";
  public description : string = "go back to home page";
  public topBar : Array<string> = ['user','cart'];
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

  constructor() { }

  ngOnInit(): void {
  }

}
