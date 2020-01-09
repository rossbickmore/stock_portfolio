import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockPickComponent } from './stock-pick/stock-pick.component';

import { AlertModule } from 'ngx-bootstrap';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatAutocompleteModule} from '@angular/material/autocomplete'

import { AppRoutingModule }     from './app-routing.module';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { PortfolioDisplayComponent } from './portfolio-display/portfolio-display.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StockTrackComponent } from './stock-track/stock-track.component';
import { NavbarComponent } from './navbar/navbar.component';


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
    AppRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    StockPickComponent,
    StockDisplayComponent,
    PortfolioDisplayComponent,
    StockTrackComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
