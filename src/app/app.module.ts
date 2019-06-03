import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {MainComponent} from './common/main/main.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {MoviesState} from './shared/state/movies/movies.state';
import {HttpClientModule} from '@angular/common/http';
import {MovieItemComponent} from './common/movie-item/movie-item.component';
import {LoadableModule} from './shared/loadable/loadable.module';
import {GenresState} from './shared/state/genres/genres.state';
import {ApiConfigState} from './shared/state/api-config/api-config.state';
import {MatSelectModule, MatSliderModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownComponent} from './common/dropdown/dropdown.component';
import { HeaderNavComponent } from './common/header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MovieItemComponent,
    DropdownComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([MoviesState, GenresState, ApiConfigState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    LoadableModule,
    MatSliderModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
