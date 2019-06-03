import {Component, Input} from '@angular/core';
import {FilterMoviesUpdate} from '../../shared/state/movies/movies.actions';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input()
  name: string;

  @Input()
  selectedValue: number;

  @Input()
  items: any[];

  @Input()
  label: string;

  constructor(protected store: Store) {
  }

  onChangeEmit(value) {
    this.store.dispatch(new FilterMoviesUpdate(value));
  }
}
