import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './cards/cards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeasonalityComponent } from './seasonality/seasonality.component';

import { ChartModule } from 'angular-highcharts';
import { TypeSegComponent } from './type-seg/type-seg.component';
import { DocDisComponent } from './doc-dis/doc-dis.component';
import { DocPerSegComponent } from './doc-per-seg/doc-per-seg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MainComponent,
    CardsComponent,
    SeasonalityComponent,
    TypeSegComponent,
    DocDisComponent,
    DocPerSegComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
