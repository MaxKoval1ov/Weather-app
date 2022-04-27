import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

import { State } from '..';
import { goOnline } from '../actions/config.actions';
import { signIn, signOut } from '../actions/user.actions';

@Injectable()
export class TodoEffect {
  constructor(private actions$: Actions, private store: Store<State>) {}

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      switchMap(() => this.store.dispatch(goOnline())
    )
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signOut),
      switchMap((action) => {
        return this.todosService.createTask(action.todo).pipe(
          mergeMap((newTodo) => [addTodo({ todo: newTodo }), addTodoSuccess()]),
          catchError((error) => of(addTodoFail({ error })))
        );
      })
    )
  );
}
