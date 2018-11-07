import { SimpleChanges, Input, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { WikiService } from "../wiki.service";

@Component({
  selector: 'app-wiki-results',
  templateUrl: './wiki-results.component.html',
  styleUrls: ['./wiki-results.component.css']
})
export class WikiResultsComponent implements OnInit {

  constructor(private wiki:WikiService) { }
  @Input()
  term:string;

  results:any[]; 
  clear() {
  	this.results = undefined;
  }
  ngOnInit() {
  }
  sayHi() {console.log("Hi from child");}
  search() {
  	this.wiki.search(this.term)
  	.subscribe(r=>{
  		var x=r.json();
  		this.results =  x['query']['search'];
	});
  }

  ngOnChanges(changes:SimpleChanges) {
  	//if (this.term != undefined) this.term = this.term.toUpperCase();
  }
}
