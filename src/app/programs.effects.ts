import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { EMPTY, Observable, throwError } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as programActions from "./programs.actions";
import { ProgramsService } from './programs.service';
import { Action } from '@ngrx/store';
import { Program } from './models/program.model';

@Injectable()
export class ProgramEffects {
  constructor(
    private actions: Actions,
    private programsService: ProgramsService
  ) {}


  loadUsers$: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(programActions.ListPrograms),
    mergeMap(() => this.programsService.getPrograms()
      .pipe(
        map((data: Program[]) => {
          console.log(data)
          return { type: '[Programs Component] load success', payload: data };
        }),
        catchError((error) => throwError(Error))
      ))
    )
  );
}
