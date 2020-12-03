import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css'],
  template : ``
})
export class ShelvesComponent{
    title = "Shelves here"

    getTitle(){
        return this.title;
    }

    shelves = ["green veg", "yello veg", "red veg"];
}