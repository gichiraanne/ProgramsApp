import { createReducer, on, State } from "@ngrx/store";
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
  on(
    ActivityActions.LoadActivitiesSuccess,
    (state: ActivityState, { payload }) => {
      return { ...state, activities: payload };
    }
  ),

  on(ActivityActions.AddActivity, (state: ActivityState) => state),

  on(ActivityActions.AddActivitySuccess, (state: ActivityState, { payload }) => {
    return { ...state, activities: [...state.activities, payload] };
  }),

  on(ActivityActions.DeleteActivity, (state: ActivityState) => state),

  on(ActivityActions.DeleteActivitySuccess, (state: ActivityState, { payload }) => {
    return {
      ...state,
      activities: [
        ...state.activities.filter(activity => activity.id !== payload)
      ]
    };
  }),

  on(ActivityActions.EditActivity, (state: ActivityState) => state),

  on(ActivityActions.EditActivitySuccess, (state: ActivityState, { payload }) => {
    return {
      ...state,
      activities: [
        ...state.activities.filter(activity => activity.id !== payload.id),
        payload
      ]
    };
  }),

);
