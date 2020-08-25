import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { BackdropComponent } from '../shared/backdrop/backdrop.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    HeaderComponent,
    ModalComponent,
    BackdropComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    HeaderComponent,
    ModalComponent,
    BackdropComponent,
    CommonModule
  ]
})
export class SharedModuleModule { }
