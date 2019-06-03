import {Movie} from '../../state/movies/movie.model';

export interface MoviesList {
  results: Movie[];
  page: number;
  total_results: number;
  dates: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
}
