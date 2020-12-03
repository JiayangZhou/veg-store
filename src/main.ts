import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {StoreInfo} from './storeInfo'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number[] = [1,2,3];
let f : any[] = [1,true,'a',false];

// let is block-scoped

enum Color{
  Red = 0, Green = 1,Blue = 2
};



interface Point{
  x: number,
  y: number,
  draw:() => void
}

class Dot{

  constructor(private x?: number, private y?: number | 0){
    this.x = x;
    this.y = y;
  }

  draw(){
    console.log('X is ' + this.x + 'and Y is ' + this.y);
  }

  get X(){
    return this.x!;
  }

  set X(value : number){
    if(value < 1){
      this.x = value;
    }
  }
}

let dot = new Dot(1);
dot.draw();

let drawPoint = (point : Point) =>{
  info2.welcome();
}

let info2 : StoreInfo = new StoreInfo('7-11', 20);

let log = function(message : string){
  console.log(message);
}

log("z");

