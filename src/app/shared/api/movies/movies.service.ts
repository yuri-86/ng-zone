import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {MoviesList} from './movies-list.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  protected baseUrl = 'https://api.themoviedb.org';
  protected apiKey = 'd647493351af26c0ec5919fdcd59c3f4';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<MoviesList> {
    return this._getMovies();
  }

  /*
     * ==========
     * Overwrite the methods below in mock services in order to isolate the server for tests
     * ==========
     */

  protected _getMovies(): Observable<MoviesList> {
    return this.http
      .get<MoviesList>(`${this.baseUrl}/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
