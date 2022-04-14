import { ActionReducerMap } from '@ngrx/store';
import { Config } from './models/config.model';
import { User } from './models/user.model';
import { cityReducer } from './reducers/cities.reducer';
import { configReducer } from './reducers/config.reducer';
import { userReducer } from './reducers/user.reducer';
import { CityList } from './state/cities.state';

export interface State {
  cities: CityList;
  config: Config;
  user: User;
}

export const reducers: ActionReducerMap<State> = {
  cities: cityReducer,
  config: configReducer,
  user: userReducer
};
