import { BackdropModule } from './components/backdrop/backdrop.module';
import { ModalWindowModule } from './components/modal/modal-window.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
  ],
  imports: [
    ModalWindowModule,
    BackdropModule
  ],
  exports: [
    ModalWindowModule,
    BackdropModule
  ]
})
export class ModalModule { }
