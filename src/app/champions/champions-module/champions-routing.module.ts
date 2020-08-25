import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChampionsComponent } from '../champions.component';
import { ChampionDetailComponent } from '../champions-list/champion-item/champion-detail/champion-detail.component';

const routes: Routes = [
    { path: '', component: ChampionsComponent},
    { path: ':year', component: ChampionDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChampionsRoutingModule {

}