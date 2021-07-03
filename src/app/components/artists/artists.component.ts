import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../service/artists.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  loading: boolean = false;
  searchVal: any;
  searchRes: any;
  faSearch = faSearch;

  constructor(private userService: ArtistsService) { }

  ngOnInit(): void {
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
