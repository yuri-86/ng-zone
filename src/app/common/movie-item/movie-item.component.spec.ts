import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieItemComponent} from './movie-item.component';
import {NgxsModule} from '@ngxs/store';
import {GenresState} from '../../shared/state/genres/genres.state';
import {ApiConfigState} from '../../shared/state/api-config/api-config.state';
import {HttpClientModule} from '@angular/common/http';
import {GenresService} from '../../shared/api/genres/genres.service';
import {GenresMockService} from '../../shared/api/genres/genres-mock.service';
import {ApiConfigService} from '../../shared/api/api-config/api-config.service';
import {ApiConfigMockService} from '../../shared/api/api-config/api-config-mock.service';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieItemComponent],
      imports: [
        NgxsModule.forRoot([GenresState, ApiConfigState]),
        HttpClientModule
      ],
      providers: [
        {provide: GenresService, useClass: GenresMockService},
        {provide: ApiConfigService, useClass: ApiConfigMockService}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
