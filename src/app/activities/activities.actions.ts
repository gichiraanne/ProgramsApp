import { createAction, props } from "@ngrx/store";
import { Activity } from "../models/activity.model";

export const ListActivities = createAction(
  "[ActivitiesComponent] load activities from server",
  props<{ payload: number }>()
);

export const LoadActivitiesSuccess = createAction(
  "[ActivitiesComponent] load success",
  props<{ payload: any[] }>()
);

export const AddActivity = createAction(
  "[ActivityNewComponent] add new activity",
  props<{ payload: Activity }>()
);

export const AddActivitySuccess = createAction(
  "[ActivityNewComponent] activity add success",
  props<{ payload: Activity }>()
);

export const DeleteActivity = createAction(
  "[ActivitiesComponent] delete activity",
  props<{ payload: any }>()
);

export const DeleteActivitySuccess = createAction(
  "[ActivitiesComponent] activity delete success",
  props<{ payload: any }>()
);

export const EditActivity = createAction(
  "[ActivityEditComponent] update activity",
  props<{ payload: Activity }>()
);

export const EditActivitySuccess = createAction(
  "[ActivityEditComponent] activity edit success",
  props<{ payload: Activity }>()
);
