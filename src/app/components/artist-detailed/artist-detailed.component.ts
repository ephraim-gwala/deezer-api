import {Component, OnInit} from '@angular/core';
import {ArtistsService} from "../../service/artists.service";
import {ActivatedRoute} from "@angular/router";
import {trigger, animate, style, query, stagger, transition, state, group} from '@angular/animations';

@Component({
    selector: 'app-artist-detailed',
    templateUrl: './artist-detailed.component.html',
    styleUrls: ['./artist-detailed.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.album', [
                    style({opacity: 0, transform: 'translateY(200px)'}),
                    stagger(-30, [
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ]),
        trigger('flyInOut', [
            state('in', style({
                transform: 'translateY(0)', opacity: 1
            })),
            transition('void => *', [
                style({ transform: 'translateY(50px)', opacity: 0 }),
                group([
                    animate('0.3s 0.1s ease', style({
                        transform: 'translateY(0)',
                    })),
                    animate('0.3s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
        ]),
    ]
})
export class ArtistDetailedComponent implements OnInit {
  private loader: boolean = false;
  id: string | undefined;
  artist: any;
  topTracks: any;
  albums: any;
  noAlbums:boolean = false;

  constructor(private userService: ArtistsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.loader = true;

          //get the artist using artist id
          this.userService.getArtist(id)
            .subscribe(results => {
              this.artist = results;
            });

          //Get artist top tracks
          this.userService.getTracks(id)
            .subscribe(results => {
              this.topTracks = results;
            });

          //Get all the artist albums
          this.userService.getAlbums(id)
              .subscribe(results => {
                this.albums = results;
                if(this.albums.length == 0) {
                    this.noAlbums = true;
                }
              });
        });
  }
}
