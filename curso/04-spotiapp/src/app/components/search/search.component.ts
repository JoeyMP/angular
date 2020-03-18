import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  artist: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  search(termino: string) {
    if(termino.length >0){
      this.spotifyService.getArtist(termino).subscribe((data: any) => {
        this.artist = data;
      });
    }
  }
}
