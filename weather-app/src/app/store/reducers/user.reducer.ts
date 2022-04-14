import { createReducer, on } from '@ngrx/store';
import { signIn, signOut } from '../actions/user.actions';
import { User } from '../models/user.model';

export const initialState: User = {
  name: '',
  surname: '',
};

export const userReducer = createReducer(
  initialState,
  on(signIn, (state, { name, surname }) => ({ ...state, name, surname })),
  on(signOut, (state) => ({ ...state, user: { name: null, surname: null } }))
);
