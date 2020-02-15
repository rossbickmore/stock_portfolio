import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './services/data.service'
import { StoreModule } from "@ngrx/store";
import { appReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './store/effects'
import { SpinnerComponent } from './stock-pick/spinner/spinner.component';
import { PortfolioDisplayComponent } from './stock-pick/portfolio-display/portfolio-display.component';
import { StockDisplayComponent } from './stock-pick/stock-display/stock-display.component';
import { StockPickComponent } from './stock-pick/stock-pick.component';
import { StockTrackComponent } from './stock-track/stock-track.component';
import { LineChartComponent } from './stock-track/line-chart/line-chart.component';
import { ProgressBarComponent } from './stock-track/progress-bar/progress-bar.component';
import {MatTabsModule} from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({applicationState: appReducer},),
    EffectsModule.forRoot([AppEffects]),
    MatTabsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    StockDisplayComponent,
    StockPickComponent,
    StockTrackComponent,
    LineChartComponent,
    ProgressBarComponent,
    SpinnerComponent,
    PortfolioDisplayComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
``