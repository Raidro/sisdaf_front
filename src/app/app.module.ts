import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpmModule } from './opm/opm.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OpmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
