import { createReducer, on } from '@ngrx/store';
import { goOffline, goOnline } from '../actions/config.actions';
import { Config } from '../models/config.model';

export const initialState: Config = {
  isLogged: false,
};

export const configReducer = createReducer(
  initialState,
  on(goOnline, (state) => ({ ...state, isLogged: true })),
  on(goOffline, (state) => ({ ...state, isLogged: false }))
);
