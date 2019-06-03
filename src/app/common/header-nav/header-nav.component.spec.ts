import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderNavComponent} from './header-nav.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {MoviesState} from '../../shared/state/movies/movies.state';
import {HttpClientModule} from '@angular/common/http';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderNavComponent,
        DropdownComponent
      ],
      imports: [
        MatSelectModule,
        FormsModule,
        NgxsModule.forRoot([MoviesState]),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
