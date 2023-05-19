import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './partido.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartidoComponent],
  exports : [PartidoComponent]
})
export class PartidoModule { }
