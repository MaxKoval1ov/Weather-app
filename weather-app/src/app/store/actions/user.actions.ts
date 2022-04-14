import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const signIn = createAction('[User] SignIn', props< User>());

export const signOut = createAction('[User] SignOut');
