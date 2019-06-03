import {Injectable} from '@angular/core';
import {MoviesService} from './movies.service';
import {Observable, of} from 'rxjs';
import {MoviesList} from './movies-list.model';
import {nowPlayingMovies} from '../../../../assets/mockup/now-playing-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesMockService extends MoviesService {
  protected _getMovies(): Observable<MoviesList> {
    return of<MoviesList>(nowPlayingMovies);
  }
}
