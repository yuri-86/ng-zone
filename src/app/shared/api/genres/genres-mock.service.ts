import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {GenresService} from './genres.service';
import {genres} from '../../../../assets/mockup/genres';
import {Genres} from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresMockService extends GenresService {
  protected _getGenres(): Observable<Genres> {
    return of<Genres>(genres);
  }
}
