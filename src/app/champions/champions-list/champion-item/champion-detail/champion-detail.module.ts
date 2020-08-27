import { ChampionPipePipe } from '../../../../shared/pipes/champion-pipe/champion-pipe.pipe';
import { ModalModule } from './../../../../shared/modal.module';
import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionDetailComponent } from './champion-detail.component';

@NgModule({
  declarations: [
    ChampionDetailComponent,
    ChampionPipePipe
  ],
  imports: [
    SharedModule,
    ModalModule
  ],
  exports: [
    ChampionDetailComponent,
    CommonModule,
    SharedModule,
    ModalModule
  ]
})
export class ChampionDetailModule { }
