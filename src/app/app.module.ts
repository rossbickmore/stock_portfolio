import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AlertModule } from "ngx-bootstrap";

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { AppRoutingModule } from "./app-routing.module";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from "./navbar/navbar.component";

import { ChartsModule } from "ng2-charts";
import { StockPickModule} from './modules/stock-pick/stock-pick.module'
import { StockTrackModule} from './modules/stock-track/stock-track.module'

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
    FontAwesomeModule,
    ChartsModule,
    StockPickModule,
    StockTrackModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
