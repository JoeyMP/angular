import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent{
  
  newSongs: any[] = [];
  loading : boolean;
  error: boolean = false;
  messageError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    spotify.getNewRelease().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    },(error)=>{
      console.log(error);
      this.loading = false;
      this.error = true;
      this.messageError = error.error.error.message;
    });
  }
}
