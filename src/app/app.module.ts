import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { NavbarComponent } from "./navbar/navbar.component";
import { StockPickModule} from './stock-pick/stock-pick.module'
import { StockTrackModule} from './stock-track/stock-track.module'

import { DataService } from './services/data.service'

import { StoreModule } from "@ngrx/store";
import { appReducer } from './store/reducer';

import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './store/effects'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StockPickModule,
    StockTrackModule,
    StoreModule.forRoot({applicationState: appReducer},),
    EffectsModule.forRoot([AppEffects])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
