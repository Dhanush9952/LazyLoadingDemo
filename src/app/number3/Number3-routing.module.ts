import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Number3Component } from "./number3.component";

const routes: Routes = [
    { path:"", component: Number3Component }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class Number3RouterModule{}