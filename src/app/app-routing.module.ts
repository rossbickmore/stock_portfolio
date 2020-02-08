import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./stock-pick/stock-pick.module#StockPickModule"
  },
  {
    path: "stockpick",
    loadChildren: "./stock-pick/stock-pick.module#StockPickModule"
  },
  {
    path: "stocktrack",
    loadChildren: "./stock-track/stock-track.module#StockTrackModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
