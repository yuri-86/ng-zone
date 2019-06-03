import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {MoviesState} from '../shared/state/movies/movies.state';
import {GenresState} from '../shared/state/genres/genres.state';
import {ApiConfigState} from '../shared/state/api-config/api-config.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {LoadableModule} from '../shared/loadable/loadable.module';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ApiConfigMockService} from '../shared/api/api-config/api-config-mock.service';
import {ApiConfigService} from '../shared/api/api-config/api-config.service';
import {MoviesMockService} from '../shared/api/movies/movies-mock.service';
import {GenresService} from '../shared/api/genres/genres.service';
import {GenresMockService} from '../shared/api/genres/genres-mock.service';
import {MoviesService} from '../shared/api/movies/movies.service';
import {DropdownComponent} from './dropdown/dropdown.component';
import {HeaderNavComponent} from './header-nav/header-nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxsModule.forRoot([MoviesState, GenresState, ApiConfigState]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        LoadableModule,
        FormsModule,
        MatSelectModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        HeaderNavComponent,
        MainComponent,
        MovieItemComponent,
        DropdownComponent
      ],
      providers: [
        {provide: MoviesService, useClass: MoviesMockService},
        {provide: GenresService, useClass: GenresMockService},
        {provide: ApiConfigService, useClass: ApiConfigMockService}
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
