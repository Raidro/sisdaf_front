import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpmService } from './opm.service';
import { OpmComponent } from './opm/opm.component';

@NgModule({
  declarations: [
    AppComponent,
    OpmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OpmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
