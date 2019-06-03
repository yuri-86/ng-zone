import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApiConfig} from '../../state/api-config/api-config.model';
import {apiParams} from "../api-params";

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) {
  }

  getApiConfig(): Observable<ApiConfig> {
    return this._getApiConfig();
  }

  /*
     * ==========
     * Overwrite the methods below in mock services in order to isolate the server for tests
     * ==========
     */

  protected _getApiConfig(): Observable<ApiConfig> {
    return this.http
      .get<ApiConfig>(`${apiParams.baseUrl}3/configuration?api_key=${apiParams.apiKey}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
