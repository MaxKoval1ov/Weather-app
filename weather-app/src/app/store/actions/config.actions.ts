import { createAction } from '@ngrx/store';

export enum ConfigActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
  GetConfigFail = '[Config] Get Config Fail',
}

export const getConfig = createAction(ConfigActions.GetConfig);

export const getSuccess = createAction(ConfigActions.GetConfigSuccess);

export const getFail = createAction(ConfigActions.GetConfigFail);

