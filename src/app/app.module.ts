import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProgramsComponent } from "./programs/component/programs.component";
import { ProgramsReducer } from "./programs/programs.reducers";
import { ProgramEffects } from "./programs/programs.effects";
import { ActivitiesComponent } from "./activities/component/activities.component";
import { ActivityReducer } from "./activities/activities.reducers";
import { ActivityEffects } from "./activities/activities.effects";

@NgModule({
  declarations: [AppComponent, ProgramsComponent, ActivitiesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { programs: ProgramsReducer, activities: ActivityReducer }
    ),
    EffectsModule.forRoot([ProgramEffects, ActivityEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
