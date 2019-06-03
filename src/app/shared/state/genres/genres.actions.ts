import {LoadableError} from '../models/loadable.model';
import {Genres} from '../../api/genres/genres.model';

export class LoadGenres {
  static readonly type = '[Genres][Load] Loading';
}

export class LoadGenresError {
  static readonly type = '[Genres][Load] Error';

  constructor(public payload: LoadableError) {
  }
}

export class LoadGenresSuccess {
  static readonly type = '[Genres][Load] Success';

  constructor(public payload: Genres) {
  }
}
