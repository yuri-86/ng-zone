import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownComponent} from './dropdown.component';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material';
import {NgxsModule} from '@ngxs/store';
import {MoviesState} from '../../shared/state/movies/movies.state';
import {GenresState} from '../../shared/state/genres/genres.state';
import {ApiConfigState} from '../../shared/state/api-config/api-config.state';
import {HttpClientModule} from '@angular/common/http';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [
        NgxsModule.forRoot([MoviesState, GenresState, ApiConfigState]),
        FormsModule,
        MatSelectModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
