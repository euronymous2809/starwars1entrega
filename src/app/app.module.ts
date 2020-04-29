import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing , appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FondoAnimadoComponent } from './components/fondo-animado/fondo-animado.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { NavesComponent } from './components/naves/naves.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PeliculasComponent,
    FooterComponent,
    BannerComponent,
    EpisodioComponent,
    PageNotFoundComponent,
    FondoAnimadoComponent,
    PersonajesComponent,
    PlanetasComponent,
    EspeciesComponent,
    NavesComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'peliculas/:id', component: PeliculasComponent},
      { path: 'episodio/:id', component: EpisodioComponent},
      { path: 'personajes/:id', component: PersonajesComponent},
      { path: 'planetas/:id', component: PlanetasComponent},
      { path: 'especies/:id', component: EspeciesComponent},
      { path: 'naves/:id', component: NavesComponent},
      { path: 'vehiculos/:id', component: VehiculosComponent}
    ]),
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
