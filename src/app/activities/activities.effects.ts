import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, mergeMap } from "rxjs/operators";
import { throwError } from "rxjs";
import * as activityActions from "./activities.actions";
import { ActivitiesService } from "./activities.service";

@Injectable()
export class ActivityEffects {
  constructor(
    private actions: Actions,
    private activitiesService: ActivitiesService,
  ) {}

  loadActivities = createEffect(() =>
    this.actions.pipe(
      ofType(activityActions.ListActivities),
      mergeMap((action) =>
        this.activitiesService.getActivities(action.payload).pipe(
          map(data => {
            console.log(data);
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
}
