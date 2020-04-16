import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [MoviesService]
})
export class PeliculasComponent implements OnInit {
  public title: string;
  public films: any;
  public movie: Movie;
  public names: Array<string>;


  constructor(
    // tslint:disable-next-line: variable-name
    private _service: MoviesService
  ) {
    this.title = 'FILMS INFORMATION';
    this.movie = new Movie('', '', '' , '', '', '');
    this.names = [];
   }

  ngOnInit() {
    this._service.getMovies().subscribe(
      response => {
        let res: any;
        res = response;
        this.films = res.results;
        this.getNames();
        this.getMovie(3);
      },
      error => {
        console.log(error);
      }
    );
  }

  getMovie(id: number) {
    try {
      this.movie = new Movie(
        this.films[id].title,
        this.films[id].episode_id,
        this.films[id].opening_crawl,
        this.films[id].director,
        this.films[id].producer,
        this.films[id].release_date);
    } catch (err) {
      console.log(err);
    }
  }

  getNames() {
    // tslint:disable-next-line: forin
    for (const i in this.films) {
      this.names.push(this.films[i].title);
    }
  }

  onFindMovie(name: string) {
    const index: number = this.names.indexOf(name);
    if (index === -1) {
      alert('Starship not found...');
    } else {
      this.getMovie(index);
    }
  }
}
