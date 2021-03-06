import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs-list/programs.component';
import { ActivitiesComponent  } from "./activities/activities-list/activities.component";


const routes: Routes = [
  { path: 'programs', component: ProgramsComponent },
  {path: 'activities/:id', component: ActivitiesComponent },
  { path: '', redirectTo: '/programs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
