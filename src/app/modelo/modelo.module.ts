import { ModeloComponent } from './tela-modelo/tela-modelo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModeloService } from './tela-modelo/modelo.service';


@NgModule({
  declarations: [
    ModeloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ModeloService],
  exports: [ModeloComponent]
})
export class ModeloModule { }
