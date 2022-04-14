import { createAction, props } from '@ngrx/store';

export const loadCities = createAction(
  '[City Module] LoadCities',
  props<{ cities: string[] }>()
);

export const addCity = createAction(
  '[City Module] AddCity',
  props<{ newCity: string }>()
);

export const deleteCity = createAction(
  '[City Module] DeleteCity',
  props<{ name: string }>()
);
