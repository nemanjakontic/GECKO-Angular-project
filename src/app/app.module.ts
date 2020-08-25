import { ChampionsModuleModule } from './champions/champions-module/champions-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // ChampionsComponent,
    // ChampionsListComponent,
    // ChampionItemComponent,
    // ChampionDetailComponent,
    // LoadingSpinnerComponent,
    // HeaderComponent,
    // ModalComponent,
    // BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChampionsModuleModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
