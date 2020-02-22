import {Action, createSelector, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {
  generateLoadableError,
  Loadable,
  onLoadableError,
  onLoadableInit, onLoadableLoad, onLoadableSuccess
} from '../models/loadable.model';
import {catchError, map} from 'rxjs/operators';
import {asapScheduler, of} from 'rxjs';
import {GenresService} from '../../api/genres/genres.service';
import {Genre} from './genres.model';
import {LoadGenres, LoadGenresError, LoadGenresSuccess} from './genres.actions';
import {Genres} from '../../api/genres/genres.model';
import {Injectable} from "@angular/core";

export interface GenresStateModel {
  genres: Loadable<Genre[]>;
}

@State<GenresStateModel>({
  name: 'genres',
  defaults: {
    genres: onLoadableInit()
  }
})

@Injectable()
export class GenresState implements NgxsOnInit {

  constructor(protected service: GenresService) {
  }

  static getMovieGenres(ids: number[]) {
    return createSelector([GenresState], (state: GenresStateModel): Genre[] | null => {
      return state.genres.data.filter(({id}) => ids.includes(id));
    });
  }

  @Selector()
  static genres(state: GenresStateModel): Genre[] {
    return state.genres.data;
  }

  @Selector()
  static loaded(state: GenresStateModel): Loadable<Genre[]> {
    return state.genres;
  }

  @Action(LoadGenres, {cancelUncompleted: true})
  loadGenres(ctx: StateContext<GenresStateModel>) {
    ctx.patchState({
      genres: onLoadableLoad<Genre[]>()
    });
    return this.remoteGenres(ctx);
  }

  @Action(LoadGenresSuccess, {cancelUncompleted: true})
  loadGenresSuccess(ctx: StateContext<GenresStateModel>, action: LoadGenresSuccess) {
    const result = action.payload && action.payload.genres;
    ctx.patchState({
      genres: onLoadableSuccess<Genre[]>(result)
    });
  }

  @Action(LoadGenresError, {cancelUncompleted: true})
  loadGenresError(ctx: StateContext<GenresStateModel>, action: LoadGenresError) {
    ctx.patchState({
      genres: onLoadableError<null>(action.payload)
    });
  }

  protected remoteGenres(ctx: StateContext<GenresStateModel>) {
    return this.service
      .getGenres()
      .pipe(
        map((genres: Genres) =>
          asapScheduler.schedule(() =>
            ctx.dispatch(new LoadGenresSuccess(genres))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              ctx.dispatch(new LoadGenresError(generateLoadableError(error.message, error.status)))
            )
          )
        )
      );
  }

  ngxsOnInit(ctx: StateContext<GenresStateModel>) {
    ctx.dispatch(new LoadGenres());
  }
}
