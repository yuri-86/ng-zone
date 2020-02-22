import {Routes} from '@angular/router';
import {MainComponent} from './common/main/main.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {
    path: '**',
    loadChildren: () => import('./features/alert-page/alert-page.module').then(m => m.AlertPageModule)
  }
];

