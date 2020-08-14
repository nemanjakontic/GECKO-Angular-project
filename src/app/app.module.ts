import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionsListComponent } from './champions/champions-list/champions-list.component';
import { ChampionItemComponent } from './champions/champions-list/champion-item/champion-item.component';
import { ChampionDetailComponent } from './champions/champions-list/champion-item/champion-detail/champion-detail.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ChampionsListComponent,
    ChampionItemComponent,
    ChampionDetailComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
