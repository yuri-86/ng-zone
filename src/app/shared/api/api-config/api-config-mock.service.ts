import {Injectable} from '@angular/core';
import {ApiConfigService} from './api-config.service';
import {Observable, of} from 'rxjs';
import {ApiConfig} from '../../state/api-config/api-config.model';
import {configuration} from '../../../../assets/mockup/configuration';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigMockService extends ApiConfigService {
  protected _getApiConfig(): Observable<ApiConfig> {
    return of<ApiConfig>(configuration);
  }
}
