import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApiConfig} from '../../state/api-config/api-config.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  protected baseUrl = 'https://api.themoviedb.org/3/';
  protected apiKey = 'd647493351af26c0ec5919fdcd59c3f4';

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
      .get<ApiConfig>(`${this.baseUrl}configuration?api_key=${this.apiKey}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
