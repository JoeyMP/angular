import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { SearchHeroeComponent } from "./components/search-heroe/search-heroe.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "search-heroe/:search", component: SearchHeroeComponent },
  { path: "about", component: AboutComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
