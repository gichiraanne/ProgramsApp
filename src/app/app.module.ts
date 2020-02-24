import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import {  StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramsReducer } from "./programs.reducers";
import { ProgramEffects } from "./programs.effects";

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({programs:ProgramsReducer}),
    EffectsModule.forRoot([ProgramEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
