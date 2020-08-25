import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionDetailComponent } from './champion-detail.component';

@NgModule({
  declarations: [
    ChampionDetailComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ChampionDetailComponent,
    CommonModule,
    SharedModule
  ]
})
export class ChampionDetailModule { }
