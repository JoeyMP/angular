import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

//importar rutas
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NoimagesPipe } from './pipes/noimages.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';


//services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistaComponent,
    NoimagesPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
