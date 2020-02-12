import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "src/app/services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-heroe",
  templateUrl: "./search-heroe.component.html",
  styleUrls: ["./search-heroe.component.css"]
})
export class SearchHeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  search: string;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.search = param["search"];
      this.heroes = this.heroesService.buscarHeroe(this.search);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}
