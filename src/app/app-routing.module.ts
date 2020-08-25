import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champions/champions-list/champion-item/champion-detail/champion-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'seasonChampions', pathMatch: 'full'},
  { path: 'seasonChampions', loadChildren: './champions/champions.module#ChampionsModule'},
  { path: 'seasonChampions/:year', loadChildren: './champions/champions-list/champion-item/champion-detail/champion-detail.module#ChampionDetailModule'}
  // { path: 'seasonChampions', component: ChampionsComponent},
  // { path: 'seasonChampions/:year', component: ChampionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
