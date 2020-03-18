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
        "Bearer BQAEtgTchjSSK_0Ot4HdJ3u2mnrglnZLhT3fjE6B8MlRdLIrg2m8L7nY2hBMNA9H0INJwvmE_xKqSJT_ptY"
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
