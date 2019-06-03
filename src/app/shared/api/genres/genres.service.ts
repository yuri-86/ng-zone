import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Genres} from './genres.model';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {apiParams} from '../api-params';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) {
  }

  getGenres(): Observable<Genres> {
    return this._getGenres();
  }


  /*
     * ==========
     * Overwrite the methods below in mock services in order to isolate the server for tests
     * ==========
     */

  protected _getGenres(): Observable<Genres> {
    return this.http
      .get<Genres>(`${apiParams.baseUrl}3/genre/movie/list?api_key=${apiParams.apiKey}&language=en-US`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
