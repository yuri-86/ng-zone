import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {NgxsModule} from '@ngxs/store';
import {MoviesState} from '../../shared/state/movies/movies.state';
import {LoadableModule} from '../../shared/loadable/loadable.module';
import {MoviesMockService} from '../../shared/api/movies/movies-mock.service';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {HttpClientModule} from '@angular/common/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MovieItemComponent
      ],
      imports: [
        NgxsModule.forRoot([MoviesState]),
        LoadableModule,
        HttpClientModule
      ],
      providers: [MoviesMockService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
