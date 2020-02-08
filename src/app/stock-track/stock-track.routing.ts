import { StockTrackComponent } from "./stock-track.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: StockTrackComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
