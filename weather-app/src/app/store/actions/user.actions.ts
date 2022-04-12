import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setUser = createAction('[User] Set user', props<{ user: User }>());

export const deleteUser = createAction('[User] Delete user');
