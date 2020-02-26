import { createReducer, on } from '@ngrx/store';
import * as programActions from './programs.actions';
import { Program } from '../../models/program.model';

export class ProgramState {
  programs: Array<Program>;
}

export const initializeState = (): ProgramState => {
  return { programs: Array<Program>() };
};

export const initialState = initializeState();

export const ProgramsReducer = createReducer(
  initialState,
  on(programActions.ListPrograms, state => state),

  on(programActions.LoadProgramsSuccess, (state: ProgramState, { payload }) => {
    return { ...state, programs: payload };
  })
);
