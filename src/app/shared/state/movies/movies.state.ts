import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {
  FilterMoviesUpdate,
  LoadMovies,
  LoadMoviesError,
  LoadMoviesSuccess
} from './movies.actions';
import {
  generateLoadableError,
  Loadable,
  onLoadableError,
  onLoadableInit, onLoadableLoad, onLoadableSuccess
} from '../models/loadable.model';
import {catchError, map} from 'rxjs/operators';
import {Movie} from './movie.model';
import {MoviesService} from '../../api/movies/movies.service';
import {MoviesList} from '../../api/movies/movies-list.model';
import {asapScheduler, of} from 'rxjs';
import {Injectable} from "@angular/core";

export interface MoviesStateModel {
  movies: Loadable<Movie[]>;
  moviesFilter: number;
}

@State<MoviesStateModel>({
  name: 'moviesByPopularity',
  defaults: {
    movies: onLoadableInit(),
    moviesFilter: 0
  }
})

@Injectable()
export class MoviesState implements NgxsOnInit {

  constructor(protected service: MoviesService) {
  }

  @Selector()
  static moviesByPopularity(state: MoviesStateModel): Movie[] {
    const movies = [...state.movies.data];

    // Sort by popularity
    movies.sort((obj1, obj2) => {
      return obj1.popularity + obj2.popularity;
    });
    return movies;
  }

  @Selector()
  static moviesFilterByRating(state: MoviesStateModel) {
    const movies = MoviesState.moviesByPopularity(state);
    return movies.filter(item => item.vote_average > state.moviesFilter);
  }

  @Selector()
  static loaded(state: MoviesStateModel): Loadable<Movie[]> {
    return state && state.movies;
  }

  @Action(LoadMovies, {cancelUncompleted: true})
  loadMovies(ctx: StateContext<MoviesStateModel>) {
    ctx.patchState({
      movies: onLoadableLoad<Movie[]>()
    });
    return this.remoteMovies(ctx);
  }

  @Action(LoadMoviesSuccess, {cancelUncompleted: true})
  loadMoviesSuccess(ctx: StateContext<MoviesStateModel>, {payload}: LoadMoviesSuccess) {
    const result = payload && payload.results;
    ctx.patchState({
      movies: onLoadableSuccess<Movie[]>(result)
    });
  }

  @Action(LoadMoviesError, {cancelUncompleted: true})
  loadMoviesError(ctx: StateContext<MoviesStateModel>, {payload}: LoadMoviesError) {
    ctx.patchState({
      movies: onLoadableError<null>(payload)
    });
  }

  @Action(FilterMoviesUpdate, {cancelUncompleted: true})
  filterMoviesUpdate(ctx: StateContext<MoviesStateModel>, {payload}: FilterMoviesUpdate) {
    ctx.patchState({
      moviesFilter: payload
    });
  }

  protected remoteMovies(ctx: StateContext<MoviesStateModel>) {
    return this.service
      .getMovies()
      .pipe(
        map((moviesList: MoviesList) =>
          asapScheduler.schedule(() =>
            ctx.dispatch(new LoadMoviesSuccess(moviesList))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              ctx.dispatch(new LoadMoviesError(generateLoadableError(error.message, error.status)))
            )
          )
        )
      );
  }

  ngxsOnInit(ctx: StateContext<MoviesStateModel>) {
    ctx.dispatch(new LoadMovies());
  }
}
