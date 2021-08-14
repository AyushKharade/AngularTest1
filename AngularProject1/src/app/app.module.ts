import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { DemoView2Component } from './demo-view2/demo-view2.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { SliderValueService } from './slider-value.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoViewComponent,

    DemoView2Component,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [SliderValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
