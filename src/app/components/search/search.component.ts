import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword:string ='';
  public historyList: any[] = [];
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    // called when refresh
  }
  keyDown(e:any){
    if(e.keyCode == 13){
      alert('nothing found');
    }
  }
  doSearch(){
    if (!this.historyList.includes(this.keyword)){
      this.historyList.push(this.keyword);      
    }
    this.keyword ='';
  }
  deleteHistory(key : any){
    this.historyList.splice(this.historyList.indexOf(key) - 1,1);
  }
}
