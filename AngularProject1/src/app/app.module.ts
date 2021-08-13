import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoView2Component } from './demo-view2/demo-view2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoViewComponent,
    DemoView2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
