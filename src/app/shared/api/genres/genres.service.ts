import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Genres} from './genres.model';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  protected baseUrl = 'https://api.themoviedb.org';
  protected apiKey = 'd647493351af26c0ec5919fdcd59c3f4';

  constructor(private http: HttpClient) { }

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
      .get<Genres>(`${this.baseUrl}/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
