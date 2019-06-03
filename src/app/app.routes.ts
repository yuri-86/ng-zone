import {Routes} from '@angular/router';
import {MainComponent} from './common/main/main.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '**', loadChildren: './features/alert-page/alert-page.module#AlertPageModule'}
];

