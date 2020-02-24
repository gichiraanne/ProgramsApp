import { createAction, props } from '@ngrx/store';
import { Activity } from '../models/activity.model';

export const ListActivities = createAction(
  "[ActivitiesComponent] load activities from server",
  props<{ payload: number }>()
);

export const LoadActivitiesSuccess = createAction(
  "[ActivitiesComponent] load success",
  props<{ payload: Activity[] }>()
);
