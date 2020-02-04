import { StockPickComponent } from "./stock-pick.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
  {
    path: "stockpick",
    component: StockPickComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
