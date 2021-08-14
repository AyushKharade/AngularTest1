import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoView2Component } from './demo-view2/demo-view2.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
{path: 'demo_view1', component:DemoViewComponent},
{path: 'demo_vew2', component:DemoView2Component},
{path: 'view1',component:View1Component},
{path: 'view2',component:View2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
