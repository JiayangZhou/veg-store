import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title : any; // passed variable
  
  @Input() run : any; // passed function

  @Input() category : any; // passed the whole parent component

  constructor() { }

  ngOnInit(): void {
  }

  getParentRun() : void{
    // child component running function from parent function
    this.run(); 
    this.category.run();
  }

}
