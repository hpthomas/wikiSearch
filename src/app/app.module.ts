import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WikiResultsComponent } from './wiki-results/wiki-results.component';
import { GiphyResultsComponent } from './giphy-results/giphy-results.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiResultsComponent,
    GiphyResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

