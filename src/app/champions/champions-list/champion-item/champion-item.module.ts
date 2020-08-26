import { ChampionDetailModule } from './champion-detail/champion-detail.module';
import { NgModule } from '@angular/core';
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
    ChampionDetailModule
  ]
})
export class ChampionItemModule { }
