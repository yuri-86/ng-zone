import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Movie} from '../../shared/state/movies/movie.model';
import {Store} from '@ngxs/store';
import {GenresState} from '../../shared/state/genres/genres.state';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Genre} from '../../shared/state/genres/genres.model';
import {ApiConfigState} from '../../shared/state/api-config/api-config.state';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit, OnDestroy {
  @Input()
  movie: Pick<Movie, 'title' | 'genre_ids' | 'poster_path'>;

  genresList: Genre[];
  movieImage: string;

  constructor(protected store: Store) {
  }

  ngOnInit() {

    // Fetch movie genres
    if (this.movie && this.movie.genre_ids) {
      this.store.select(GenresState.getMovieGenres(this.movie.genre_ids)).pipe(
        untilDestroyed(this)
      ).subscribe(data => {
        if (data) {
          this.genresList = data;
        }
      });
    }

    // Fetch movie image
    this.store.select(ApiConfigState.fetchApiConfig).pipe(
      untilDestroyed(this)
    ).subscribe(value => {
      if (value && value.images && value.change_keys && this.movie && this.movie.poster_path) {
        this.movieImage = `${value.images.base_url}${value.images.poster_sizes[2]}${this.movie.poster_path}`;
      }
    });
  }

  ngOnDestroy(): void {
  }

}

