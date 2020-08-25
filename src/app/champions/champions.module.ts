import { ChampionsRoutingModule } from './champions-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ChampionsListModule } from './champions-list/champions-list.module';
import { ChampionsComponent } from './champions.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    ChampionsListModule,
    SharedModule,
    ChampionsRoutingModule
  ],
  exports: [
    ChampionsComponent,
    SharedModule
  ]
})
export class ChampionsModule { }
