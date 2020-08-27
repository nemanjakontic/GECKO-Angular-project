import { BackdropComponent } from './backdrop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BackdropComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackdropComponent,
    CommonModule
  ]
})
export class BackdropModule { }
