import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export type CityList = EntityState<string>;

export const citiesAdapter: EntityAdapter<string> = createEntityAdapter<string>(
  { selectId: (city) => city, sortComparer: false }
);
