import { createAction, props } from "@ngrx/store";
import { Program } from "../models/program.model";

export const ListPrograms = createAction(
  "[ProgramsComponent] load Programs from server"
);

export const LoadProgramsSuccess = createAction(
  "[ProgramsComponent] load success",
  props<{ payload: Program[] }>()
);
