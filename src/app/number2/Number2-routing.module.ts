import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Number2Component } from "./number2.component";

const routes: Routes = [
    { path:"", component: Number2Component }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class Number2RouterModule{}