import { BackdropModule } from './backdrop/backdrop.module';
import { ModalWindowModule } from './modal/modal-window.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModalWindowModule,
    BackdropModule
  ],
  exports: [
    ModalWindowModule,
    BackdropModule,
    CommonModule
  ]
})
export class ModalModule { }
