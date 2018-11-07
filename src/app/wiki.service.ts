import { Injectable } from '@angular/core';
import { config } from "../environments/environment";
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'

  
})
export class WikiService {

  constructor(private http: Http) { }
  search(term:string) {
  	return this.http.get(config.url + term);
  }

}
