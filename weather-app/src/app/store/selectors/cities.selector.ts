import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { citiesAdapter, CityList } from '../state/cities.state';

export const selectCities = (state: State) => state.cities;

export const {
  selectAll: getAllCities,
  selectTotal: getCountAllCities,
  selectEntities: getEntitiesCities,
} = citiesAdapter.getSelectors(selectCities);

export const getTodoItems = createSelector(
  selectCities,
  (state: CityList) => state.entities
);
