import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyDown(e:any){
    if(e.keyCode == 13){
      alert('nothing found');
    }
  }
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    // called when refresh
  }

}
