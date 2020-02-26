import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as activityActions from './activities.actions';
import { ActivitiesService } from '../../shared/activities.service';

@Injectable()
export class ActivityEffects {
  constructor(
    private actions: Actions,
    private activitiesService: ActivitiesService,
  ) {}

  loadActivities$ = createEffect(() =>
    this.actions.pipe(
      ofType(activityActions.ListActivities),
      mergeMap((action) =>
        this.activitiesService.getActivities(action.payload).pipe(
          map(data => {
            return activityActions.LoadActivitiesSuccess({ payload: data });
          }),
          catchError(error => {
            console.log(error);
            return throwError(Error);
          })
        )
      )
    )
  );

  addActivity$ = createEffect(() =>
    this.actions.pipe(
      ofType(activityActions.AddActivity),
      mergeMap((action) =>
        this.activitiesService.addActivity(action.payload).pipe(
          map((data: any) => {
            return activityActions.AddActivitySuccess({ payload: data });
          }),
          catchError(error => {
            console.log(error);
            return throwError(Error);
          })
        )
      )
    )
  );

  editActivity$ = createEffect(() =>
    this.actions.pipe(
      ofType(activityActions.EditActivity),
      mergeMap((action) =>
        this.activitiesService.editActivity(action.payload).pipe(
          map((data: any) => {
            return activityActions.EditActivitySuccess({ payload: data });
          }),
          catchError(error => {
            console.log(error);
            return throwError(Error);
          })
        )
      )
    )
  );

  deleteActivity$ = createEffect(() =>
    this.actions.pipe(
      ofType(activityActions.DeleteActivity),
      mergeMap((action) =>
        this.activitiesService.deleteActivity(action.payload).pipe(
          map((data: any) => {
            return activityActions.DeleteActivitySuccess({ payload: data });
          }),
          catchError(error => {
            console.log(error);
            return throwError(Error);
          })
        )
      )
    )
  );
}
