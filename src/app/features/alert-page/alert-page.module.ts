import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertPageComponent} from './alert-page/alert-page.component';
import {RouterModule} from '@angular/router';
import {routes} from './alert-page.routes';

@NgModule({
  declarations: [AlertPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlertPageModule {
}
