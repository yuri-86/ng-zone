import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {MoviesState} from '../../shared/state/movies/movies.state';
import {Observable} from 'rxjs';
import {Movie} from '../../shared/state/movies/movie.model';
import {Loadable} from '../../shared/state/models/loadable.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Select(MoviesState.loaded)
  loaded$: Observable<Loadable<Movie[]>>;

  @Select(MoviesState.moviesFilterByRating)
  movies$: Observable<Movie[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
