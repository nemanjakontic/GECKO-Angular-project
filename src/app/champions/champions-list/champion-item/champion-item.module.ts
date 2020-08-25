import { ChampionDetailModule } from './champion-detail/champion-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionItemComponent } from './champion-item.component';



@NgModule({
  declarations: [
    ChampionItemComponent
  ],
  imports: [
    ChampionDetailModule
  ],
  exports: [
    ChampionItemComponent,
    CommonModule,
    ChampionDetailModule
  ]
})
export class ChampionItemModule { }
