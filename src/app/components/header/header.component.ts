import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title : any; // passed variable
  
  @Input() run : any; // passed function

  @Input() category : any; // passed the whole parent component

  @Output() private outer1 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getParentRun() : void{
    // child component running function from parent function
    this.run(); 
    this.category.run();
  }

  invokeParentRun() : void{
    console.log("executed");
    this.outer1.emit("child data");
  }

}
