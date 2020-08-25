import { ChampionsRoutingModule } from './champions-routing.module';
import { SharedModuleModule } from './../../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { ChampionsComponent } from '../champions.component';
import { ChampionsListComponent } from '../champions-list/champions-list.component';
import { ChampionItemComponent } from '../champions-list/champion-item/champion-item.component';
import { ChampionDetailComponent } from '../champions-list/champion-item/champion-detail/champion-detail.component';



@NgModule({
  declarations: [
    ChampionsComponent,
    ChampionsListComponent,
    ChampionItemComponent,
    ChampionDetailComponent
  ],
  imports: [
    SharedModuleModule,
    ChampionsRoutingModule
  ]
})
export class ChampionsModuleModule { }
