import { Injectable } from '@angular/core';
import { config } from '../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: Http) { }
  search(term: string) {
  	console.log("search");
    var url = `https://api.giphy.com/v1/gifs/search?api_key=${config.giphy_key}`
    +`&q=${term}&limit=5&offset=0&rating=G&lang=en`;
    return this.http.get(url);
  }
}
