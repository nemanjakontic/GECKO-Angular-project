import { ChampionItemModule } from './champion-item/champion-item.module';
import { NgModule } from '@angular/core';
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
    ChampionItemModule
  ]
})
export class ChampionsListModule { }
