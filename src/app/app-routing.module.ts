import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StockPickComponent } from "./modules/stock-pick/stock-pick.component";

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "stockpick",
    loadChildren: "./modules/stock-pick/stock-pick.module#StockPickModule"
  },
  { path: "", component: StockPickComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
