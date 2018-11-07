import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WikiResultsComponent } from "./wiki-results/wiki-results.component";
import { GiphyResultsComponent } from "./giphy-results/giphy-results.component";

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
  
  title = 'wiki';
  searchTerm:string;
  search() {
  	this.wikiChild.search();
  	this.giphyChild.search();
  }
  ngOnInit() {
  }
}
