import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpmModule } from './opm/opm.module';
import { ModeloModule } from './modelo/modelo.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OpmModule,
    ModeloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
