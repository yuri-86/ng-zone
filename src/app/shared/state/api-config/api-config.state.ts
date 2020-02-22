import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {LoadApiConfig, LoadApiConfigError, LoadApiConfigSuccess} from './api-config.actions';
import {
  generateLoadableError,
  Loadable,
  onLoadableError,
  onLoadableInit, onLoadableLoad, onLoadableSuccess
} from '../models/loadable.model';
import {catchError, map} from 'rxjs/operators';
import {asapScheduler, of} from 'rxjs';
import {ApiConfigService} from '../../api/api-config/api-config.service';
import {ApiConfig} from './api-config.model';
import {Injectable} from "@angular/core";

export interface ApiConfigStateModel {
  apiConfig: Loadable<ApiConfig>;
}

@State<ApiConfigStateModel>({
  name: 'apiConfig',
  defaults: {
    apiConfig: onLoadableInit()
  }
})

@Injectable()
export class ApiConfigState implements NgxsOnInit {

  constructor(protected service: ApiConfigService) {
  }

  @Selector()
  static loaded(state: ApiConfigStateModel): Loadable<ApiConfig> {
    return state.apiConfig;
  }

  @Selector()
  static fetchApiConfig(state: ApiConfigStateModel): ApiConfig {
    return state.apiConfig.data;
  }

  @Action(LoadApiConfig, {cancelUncompleted: true})
  loadApiConfig(ctx: StateContext<ApiConfigStateModel>) {
    ctx.patchState({
      apiConfig: onLoadableLoad<ApiConfig>()
    });
    return this.remoteMovies(ctx);
  }

  @Action(LoadApiConfigSuccess, {cancelUncompleted: true})
  loadApiConfigSuccess(ctx: StateContext<ApiConfigStateModel>, action: LoadApiConfigSuccess) {
    ctx.patchState({
      apiConfig: onLoadableSuccess<ApiConfig>(action.payload)
    });
  }

  @Action(LoadApiConfigError, {cancelUncompleted: true})
  loadApiConfigError(ctx: StateContext<ApiConfigStateModel>, action: LoadApiConfigError) {
    ctx.patchState({
      apiConfig: onLoadableError<null>(action.payload)
    });
  }

  protected remoteMovies(ctx: StateContext<ApiConfigStateModel>) {
    return this.service
      .getApiConfig()
      .pipe(
        map((apiConfig: ApiConfig) =>
          asapScheduler.schedule(() =>
            ctx.dispatch(new LoadApiConfigSuccess(apiConfig))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              ctx.dispatch(new LoadApiConfigError(generateLoadableError(error.message, error.status)))
            )
          )
        )
      )
      ;
  }

  ngxsOnInit(ctx: StateContext<ApiConfigStateModel>) {
    ctx.dispatch(new LoadApiConfig());
  }
}
