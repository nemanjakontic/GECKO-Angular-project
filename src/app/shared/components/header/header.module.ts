import { FontDirectiveDirective } from '../../directives/font-directive/font-directive.directive';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FontDirectiveDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    FontDirectiveDirective
  ]
})
export class HeaderModule { }
