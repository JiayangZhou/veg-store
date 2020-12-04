import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css'],
  template : ``
})
export class ShelvesComponent{
    title = "Shelves here";

    //shelves = ["green veg", "yello veg", "red veg"];
    content = "we have all colors";


    public shelves : any[] = [
    {
      cate: "root",
      list:[
        {
          name:'radish',
          price: 20
        },{
          name:'potato',
          price: 10
        }
      ]
    },{
      cate: "seed",
      list:[
        {
          name:'corn',
          price: 15
        },{
          name:'rice',
          price: 3
        }
      ]
    },{
      cate: "leave",
      list:[
        {
          name:'lettuce',
          price: 15
        },{
          name:'cabbage',
          price: 30
        }
      ]
    }
    ]
    getTitle(){
        return this.title;
    }

   
}