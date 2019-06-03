import {LoadableError} from '../models/loadable.model';
import {MoviesList} from '../../api/movies/movies-list.model';

export class LoadMovies {
  static readonly type = '[Movies][Load] Loading';
}

export class LoadMoviesError {
  static readonly type = '[Movies][Load] Error';

  constructor(public payload: LoadableError) {
  }
}

export class LoadMoviesSuccess {
  static readonly type = '[Movies][Load] Success';

  constructor(public payload: MoviesList) {
  }
}

export class FilterMoviesUpdate {
  static readonly type = '[Movies][Filter] Update';

  constructor(public payload: number) {
  }
}
