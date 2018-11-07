import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WikiResultsComponent } from './wiki-results/wiki-results.component';
import { GiphyResultsComponent } from './giphy-results/giphy-results.component';
import { HistoryComponent } from './history/history.component';
const routes:Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent},
    /*
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent }, */
];

@NgModule({
  declarations: [
    AppComponent,
    WikiResultsComponent,
    GiphyResultsComponent,
    HistoryComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

