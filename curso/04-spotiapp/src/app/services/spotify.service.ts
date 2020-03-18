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
        "Bearer BQB6N1euS0R7YPFkDj60KQidozumJBrlTgEdU14m-C2KH3jwXEG9kbmrNDjUmWAxcFSKPHvzoTXdfpVG0-s"
    });

    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtist(search: string) {
    return this.getQuery("search?q=" + search + "&type=artist&limit=15").pipe(
      map(data => data["artists"].items)
    );
  }
}
