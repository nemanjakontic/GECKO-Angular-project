import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { FontDirectiveDirective } from './font-directive/font-directive.directive';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FontDirectiveDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    HeaderComponent,
    FontDirectiveDirective
  ]
})
export class SharedModule { }
