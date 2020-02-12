import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  buscarHeroe(cadena: String) {
    this.router.navigate(['/search-heroe', cadena]);
  }
}
