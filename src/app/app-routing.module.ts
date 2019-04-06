import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'demo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
