import { createAction, props } from '@ngrx/store';
import { Gebruiker } from './gebruiker.types';

export const loadGebruikersSuccess = createAction('[Gebruikers] Loading Success', props<{ gebruikers: Gebruiker[] }>());
export const loadGebruikersStart = createAction('[Gebruikers] Loading Start');
