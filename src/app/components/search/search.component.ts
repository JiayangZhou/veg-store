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
    var list : any = this.storage.get('historyList');
    if (list != null){
      this.historyList = list;
    }
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
    this.storage.set("historyList",this.historyList);
  }
  deleteHistory(key : any){
    if (this.historyList.indexOf(key) == this.historyList.length - 1)
      this.historyList.splice(this.historyList.indexOf(key),1);
    else
      this.historyList.splice(this.historyList.indexOf(key) - 1,1);
    this.storage.set("historyList",this.historyList);
  }
}
