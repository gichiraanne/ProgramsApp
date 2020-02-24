import { createReducer, on } from "@ngrx/store";
import * as programActions from './programs.actions';

export const initialState = [];

export const ProgramsReducer = createReducer(
  initialState,
  on(programActions.ListPrograms, state => state),
  on(programActions.LoadProgramsSuccess, (state, { payload }) => {
    return [...state, ...payload];
  }),
);
