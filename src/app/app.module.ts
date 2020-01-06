import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    StockListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
