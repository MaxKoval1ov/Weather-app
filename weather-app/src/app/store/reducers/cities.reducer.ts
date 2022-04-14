import { Action, createReducer, on } from '@ngrx/store';
import * as CitiesActions from '../actions/cities.actions';
import { citiesAdapter, CityList } from '../state/cities.state';

export const initialState: CityList = citiesAdapter.getInitialState({
  allCities: [
    'Minsk',
    'Moscow',
    'New York',
    'Brest',
    'Mogilev',
    'Kiev',
    'Grodno',
    'Gomel',
  ],
});

const cityListReducer = createReducer(
  initialState,
  on(CitiesActions.loadCities, (state, { cities }) =>
    citiesAdapter.setAll(cities, state)
  ),
  on(CitiesActions.addCity, (state, { newCity }) =>
    citiesAdapter.addOne(newCity, state)
  ),
  on(CitiesActions.deleteCity, (state, { name }) =>
    citiesAdapter.removeOne(name, state)
  )
);

export function cityReducer(state: CityList | undefined, action: Action) {
  return cityListReducer(state, action);
}
