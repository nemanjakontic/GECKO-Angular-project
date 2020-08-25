import { ChampionItemModule } from './champion-item/champion-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsListComponent } from './champions-list.component';



@NgModule({
  declarations: [
    ChampionsListComponent
  ],
  imports: [
    ChampionItemModule
  ],
  exports: [
    ChampionsListComponent,
    CommonModule,
    ChampionItemModule
  ]
})
export class ChampionsListModule { }
