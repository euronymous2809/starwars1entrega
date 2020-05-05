import { Component, OnInit } from '@angular/core';
import { PlanetasService} from 'src/app/services/planetas.service';
import { Planet } from 'src/app/models/planet';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pop-up-planeta',
  templateUrl: './pop-up-planeta.component.html',
  styleUrls: ['./pop-up-planeta.component.css'],
  providers: [PlanetasService]
})
export class PopUpPlanetaComponent implements OnInit {
  public details: any;
  public numId: number;
  public planet: Planet;

  constructor(
    private _service: PlanetasService,
    private ruta: ActivatedRoute

  ) {
    this.planet = new Planet('', '', '' , '', '', '', '', '', '');

   }
  
  ngOnInit() {
    let id = +this.ruta.snapshot.paramMap.get('id');
    this.numId = +this.ruta.snapshot.paramMap.get('id');
    this._service.getPlanets(id).subscribe(
      response => {
        let res: any;
        res = response;
        this.details = res;
        this.getPlanet();    
      },    
      error => {
        console.log(error);
      }
    );
  }

  getPlanet() {
    try {
      this.planet = new Planet(
        this.details.name,
        this.details.rotation_period,
        this.details.orbital_period,
        this.details.diameter,
        this.details.climate,
        this.details.gravity,
        this.details.terrain,
        this.details.surface_water,
        this.details.population);
    } catch (err) {
      console.log(err);
    }
  }
}
