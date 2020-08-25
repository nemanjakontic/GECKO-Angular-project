import { ChampionDetailComponent } from './champions-list/champion-item/champion-detail/champion-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions.component';

const routes: Routes = [
  {
    path: '', component: ChampionsComponent
  },
  {
    path: ':year', component: ChampionDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }
