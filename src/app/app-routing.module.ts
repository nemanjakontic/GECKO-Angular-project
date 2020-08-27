import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'seasonChampions', pathMatch: 'full'},
  { path: 'seasonChampions', loadChildren: () => import('./champions/champions.module').then(m => m.ChampionsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, 
                                          anchorScrolling: 'enabled',
                                          onSameUrlNavigation: 'reload',
                                          scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
