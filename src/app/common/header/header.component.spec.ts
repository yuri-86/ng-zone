import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {MoviesState} from '../../shared/state/movies/movies.state';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderNavComponent} from '../header-nav/header-nav.component';
import {DropdownComponent} from '../dropdown/dropdown.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        HeaderNavComponent,
        DropdownComponent
      ],
      imports: [
        NgxsModule.forRoot([MoviesState]),
        MatSelectModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
