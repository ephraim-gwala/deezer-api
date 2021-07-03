import { Component } from '@angular/core';
import { ArtistsService } from './service/artists.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Deezer';
  loading: boolean = false;
  searchVal: any;
  searchRes: any;
  faSearch = faSearch;

  constructor(private userService: ArtistsService) {

  }

  searchArtist() {
    console.log(this.searchVal);
    this.userService.searchMusic(this.searchVal)
      .subscribe(results => {
        console.log(results);
        this.searchRes = results;
      });
  }
}
