import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../service/artists.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {trigger, animate, style, transition, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations:[
    trigger('pageAnimations', [
      transition(':enter', [
        query('.artist', [
          style({opacity: 0, transform: 'translateY(200px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
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

  //search for artist function
  searchArtist() {
    this.userService.searchMusic(this.searchVal)
        .subscribe(results => {
          this.searchRes = results;
        });
  }

}
