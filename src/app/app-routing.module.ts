import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "stockpick",
    loadChildren: "./modules/stock-pick/stock-pick.module#StockPickModule"
  },
  {
    path: "stocktrack",
    loadChildren: "./modules/stock-track/stock-track.module#StockTrackModule",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
