import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';

import { AlertModule } from 'ngx-bootstrap';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    StockListComponent,
    StockDisplayComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
