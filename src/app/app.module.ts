import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Firstmod1Component } from './firstmod1/firstmod1.component';

@NgModule({
  declarations: [
    AppComponent,
    Firstmod1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
