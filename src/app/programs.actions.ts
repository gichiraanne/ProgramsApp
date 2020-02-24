import { createAction, props } from "@ngrx/store";
import { Program } from './models/program.model';

export const ListPrograms = createAction(
  "[Programs Component] load Programs from server"
);
export const LoadProgramsSuccess = createAction(
  "[Programs Component] load success",
  props<{ payload: Program[] }>()
);
