import { ConfigState, initialConfigState } from './config.state';
import { initialUserState, UserState } from './user.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  router?: RouterReducerState;
  user: UserState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  user: initialUserState,
  config: initialConfigState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
