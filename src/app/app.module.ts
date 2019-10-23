import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { OpmModule } from './opm/opm.module';
import { ModeloModule } from './modelo/modelo.module';
import { PolicialModule } from './policial/policial.module';
// import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    OpmModule,
    ModeloModule,
    PolicialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
