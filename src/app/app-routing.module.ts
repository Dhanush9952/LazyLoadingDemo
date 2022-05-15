import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'number1',
    loadChildren: () => import('../app/number1/Number1.module').then(x => x.Number1Module)
 },
 { 
  path: 'number2',
  loadChildren: () => import('../app/number2/Number2.module').then(x => x.Number2Module)
},
{ 
  path: 'number3',
  loadChildren: () => import('../app/number3/Number3.module').then(x => x.Number3Module)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

