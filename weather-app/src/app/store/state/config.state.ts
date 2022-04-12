import { Config } from '../models/config.model';

export interface ConfigState {
  config: Config;
}

export const initialConfigState: ConfigState = {
  config: {
    isLogged: false,
  },
};
