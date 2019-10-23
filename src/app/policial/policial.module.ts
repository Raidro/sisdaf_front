import { PolicialComponent } from './tela-policial/policial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PolicialService } from './tela-policial/policial.service';



@NgModule({
  declarations: [
    PolicialComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PolicialService],
  exports: [PolicialComponent]
})
export class PolicialModule { }
