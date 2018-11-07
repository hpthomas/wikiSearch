import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WikiResultsComponent } from "./wiki-results/wiki-results.component";
import { GiphyResultsComponent } from "./giphy-results/giphy-results.component";
import { HistoryService } from "./history.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(WikiResultsComponent) 
  wikiChild:WikiResultsComponent;

  @ViewChild(GiphyResultsComponent)
  giphyChild:GiphyResultsComponent;
  constructor(private hist:HistoryService) {}
  title = 'wiki';
  searchTerm:string;
  clear () {
  	this.wikiChild.clear();
  	this.giphyChild.clear();
  }
  search() {
  	var date = new Date();
  	var time = date.getHours() + ":" + date.getMinutes();
  	this.hist.addSearch(this.searchTerm,time);
  	this.wikiChild.search();
  	this.giphyChild.search();
  }
  ngOnInit() {
  }
}
