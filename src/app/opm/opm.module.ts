import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpmComponent } from './telaOpm/opm.component';
import { OpmService } from './telaOpm/opm.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OpmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [OpmService],
  exports: [OpmComponent]
})
export class OpmModule { }
