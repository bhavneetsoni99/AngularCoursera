import { CommonModule } from "@angular/common";
import { routes } from "./app-routing/routes";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
