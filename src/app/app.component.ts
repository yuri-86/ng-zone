import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public scrollDown = false;

  constructor() {
  }

  ngOnInit() {
    const source = fromEvent(document, 'scroll');

    source.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.scrollDown = window.pageYOffset > 90);
  }

  ngOnDestroy(): void {
  }
}
