import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { HeaderComponent } from '../header/header.component';
import { ModalComponent } from '../modal/modal.component';
import { BackdropComponent } from '../backdrop/backdrop.component';



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
