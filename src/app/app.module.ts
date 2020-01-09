import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';

import { AlertModule } from 'ngx-bootstrap';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatAutocompleteModule} from '@angular/material/autocomplete'

import { AppRoutingModule }     from './app-routing.module';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { PortfolioDisplayComponent } from './portfolio-display/portfolio-display.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StockListComponent,
    StockDisplayComponent,
    PortfolioDisplayComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
