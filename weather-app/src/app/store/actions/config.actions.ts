import { createAction } from '@ngrx/store';

export enum ConfigActions {
  goOnline = '[Config] Online',
  goOffline = '[Config] Offline',
}

export const goOnline = createAction(ConfigActions.goOnline);

export const goOffline = createAction(ConfigActions.goOffline);
