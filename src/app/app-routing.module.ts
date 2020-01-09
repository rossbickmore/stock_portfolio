import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockListComponent }   from './stock-list/stock-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/stockpick', pathMatch: 'full' },
  { path: 'stockpick', component: StockListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}