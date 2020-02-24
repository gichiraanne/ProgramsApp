import { createReducer, on } from "@ngrx/store";
import * as ActivityActions from "./activities.actions";
import { Activity } from "../models/activity.model";

export class ActivityState {
  activities: Array<Activity>;
}

export const initializeState = (): ActivityState => {
  return { activities: Array<Activity>() };
};

export const initialState = initializeState();
ActivityState;

export const ActivityReducer = createReducer(
  initialState,
  on(ActivityActions.ListActivities, (state: ActivityState, id) => state),
  on(ActivityActions.LoadActivitiesSuccess, (state, { payload }) => {
    return { ...state, activities: payload };
  })
);
