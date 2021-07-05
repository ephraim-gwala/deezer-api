import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../service/artists.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {trigger, animate, style, transition} from '@angular/animations';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations:[
    trigger('show', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
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
    this.userService.searchMusic(this.searchVal)
        .subscribe(results => {
          this.searchRes = results;
        });
  }

}
