import {LoadableError} from '../models/loadable.model';
import {ApiConfig} from './api-config.model';

export class LoadApiConfig {
  static readonly type = '[ApiConfig][Load] Loading';
}

export class LoadApiConfigError {
  static readonly type = '[ApiConfig][Load] Error';

  constructor(public payload: LoadableError) {
  }
}

export class LoadApiConfigSuccess {
  static readonly type = '[ApiConfig][Load] Success';

  constructor(public payload: ApiConfig) {
  }
}
