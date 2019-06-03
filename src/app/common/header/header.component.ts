import {Component, Input} from '@angular/core';
import {filterRatingData} from './rating-filter.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  headerSticky: boolean;

  filterData: number[] = filterRatingData;

  constructor() {
  }
}
