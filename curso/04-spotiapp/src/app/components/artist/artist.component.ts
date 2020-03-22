import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {

    this.loadingArtist = true;
    
    this.activateRoute.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }

  getArtist(artistId: string) {
    this.loadingArtist = true;
    this.spotifyService.getArtist(artistId).subscribe(data => {
      this.artist = data;

      this.loadingArtist = false;
    });
  }

  getTopTracks(artistId: string) {
    this.spotifyService.getTopTracks(artistId).subscribe(data => {
      console.log(data);
      this.topTracks = data;
    });
  }
}
