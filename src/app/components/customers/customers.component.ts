import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  keyDown(e:any){
    if(e.keyCode == 13){
      alert('nothing found');
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
