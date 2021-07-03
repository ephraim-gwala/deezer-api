import { Component } from '@angular/core';
import { ArtistsService } from './service/artists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Deezer';
  loading: boolean = false;
  searchRes: any;

  constructor(private userService: ArtistsService) {
    this.userService.searchMusic('eminem')
      .subscribe(results => {
        console.log(results);
        this.searchRes = results;
      });
  }
}
