import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramsComponent } from './programs/programs-list/programs.component';
import { ProgramsReducer } from './programs/state/programs.reducers';
import { ProgramEffects } from './programs/state/programs.effects';
import { ActivitiesComponent } from './activities/activities-list/activities.component';
import { ActivityReducer } from './activities/state/activities.reducers';
import { ActivityEffects } from './activities/state/activities.effects';
import { ActivityNewComponent } from './activities/activity-new/activity-new.component';
import { ActivityEditComponent } from './activities/activity-edit/activity-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    ActivitiesComponent,
    ActivityNewComponent,
    ActivityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      programs: ProgramsReducer,
      activities: ActivityReducer
    }),
    EffectsModule.forRoot([ProgramEffects, ActivityEffects])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
