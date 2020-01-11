import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockPickComponent }   from './stock-pick/stock-pick.component';
import { StockTrackComponent} from './stock-track/stock-track.component'

import { AuthGuard } from './auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/stockpick', pathMatch: 'full' },
  { path: 'stockpick', component: StockPickComponent },
  { path: 'track', component: StockTrackComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}