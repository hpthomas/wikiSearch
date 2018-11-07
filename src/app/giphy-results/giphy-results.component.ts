import { Input, Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-giphy-results',
  templateUrl: './giphy-results.component.html',
  styleUrls: ['./giphy-results.component.css']
})
export class GiphyResultsComponent implements OnInit {

  constructor(private giphy: GiphyService ) { }
  @Input() term:string;
  url:string;
  clear() {
  	this.url=undefined;
  }
  search() {
  	this.giphy.search(this.term)
  	.subscribe(r => {
  		console.log("res");
  		var results = r.json();
  		console.log(results);
  		if (results['data'] != undefined ) {
  			var item = results['data'][0];
  			this.url = item['images']['fixed_height']['url'];
  		}
  	});
  }

  ngOnInit() {
  }

}
