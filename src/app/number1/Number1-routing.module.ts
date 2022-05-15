import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Number1Component } from "./number1.component";

const routes: Routes = [
    { path:"", component: Number1Component }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class Number1RouterModule{}