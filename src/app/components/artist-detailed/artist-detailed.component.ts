import { Component, OnInit } from '@angular/core';
import {ArtistsService} from "../../service/artists.service";
import {ActivatedRoute} from "@angular/router";
import {IArtist} from "../../interfaces/iartist";

@Component({
  selector: 'app-artist-detailed',
  templateUrl: './artist-detailed.component.html',
  styleUrls: ['./artist-detailed.component.scss']
})
export class ArtistDetailedComponent implements OnInit {
  private loader: boolean = false;
  id: string | undefined;
  artist: any;
  topTracks: any;
  albums: any;

  constructor(private userService: ArtistsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.loader = true;

          this.userService.getArtist(id)
            .subscribe(results => {
              this.artist = results;
            });

          this.userService.getTracks(id)
            .subscribe(results => {
              this.topTracks = results;
            });

          this.userService.getAlbums(id)
              .subscribe(results => {
                this.albums = results;
                console.log(results);
              });
        });
  }
}
