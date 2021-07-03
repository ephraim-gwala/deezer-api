import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistDetailedComponent} from "./components/artist-detailed/artist-detailed.component";
import {AppComponent} from "./app.component";
import {ArtistsComponent} from "./components/artists/artists.component";

const routes: Routes = [
  { path: '', component: ArtistsComponent },
  { path: 'artist/:id', component: ArtistDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
