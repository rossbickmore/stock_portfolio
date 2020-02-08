import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { NavbarComponent } from "./navbar/navbar.component";

import { StockPickModule} from './stock-pick/stock-pick.module'
import { StockTrackModule} from './stock-track/stock-track.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
