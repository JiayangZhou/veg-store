import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {
  @ViewChild('box1') box1 : any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() : void{
    // get Dom via ViewChild
    this.box1.nativeElement.style.width = '100px';
    this.box1.nativeElement.style.background = 'red';
    console.log("view child loaded");
    // get Dom via JavaScript
    // use shift + option + A to quick commenting selected text
    /* var boxDom : any = document.getElementById('box1');
    boxDom.style.background = 'blue'; */
    
    
  }

  showAside(){
    var asideDom : any = document.getElementById('aside');
    asideDom.style.transform = "translate(0,0)";
  }
  hideAside(){
    var asideDom : any = document.getElementById('aside');
    asideDom.style.transform = "translate(100%,0)";
  }
}
