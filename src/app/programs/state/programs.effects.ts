import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as programActions from './programs.actions';
import { ProgramsService } from '../../shared/programs.service';
import { Program } from '../../models/program.model';

@Injectable()
export class ProgramEffects {
  constructor(
    private actions: Actions,
    private programsService: ProgramsService
  ) {}

  loadPrograms = createEffect(() =>
    this.actions.pipe(
      ofType(programActions.ListPrograms),
      mergeMap(() =>
        this.programsService.getPrograms().pipe(
          map((data: Program[]) => {
            console.log(data);
            return programActions.LoadProgramsSuccess({ payload: data });
          }),
          catchError(error => throwError(Error))
        )
      )
    )
  );
}
