import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoViewComponent } from './demo-view/demo-view.component';

const routes: Routes = [
{path: 'demo_view1', component:DemoViewComponent},
{path: 'demo_view2'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
