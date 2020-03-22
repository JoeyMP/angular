import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("SpotifyService listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBZ12k7J0VCpWWiMoK25c71kThXPDrrqvGTuV91Sja2Pky5_aTZUPuROS2buEiOlyY00huy246waGH09KY"
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtists(search: string) {
    return this.getQuery("search?q=" + search + "&type=artist&limit=15").pipe(
      map(data => data["artists"].items)
    );
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }

}
