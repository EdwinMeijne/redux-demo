import { Action, createReducer, on } from '@ngrx/store';
import { loadGebruikersStart, loadGebruikersSuccess } from './gebruiker.actions';
import { initialState, GebruikerState } from './gebruiker.state';
import { AppState } from './gebruiker.selectors';

const reducers = createReducer(
  initialState,
  on(loadGebruikersStart, (state) => ({...state, gebruikers: [], loading: true})),
  on(loadGebruikersSuccess, (state, {gebruikers}) => ({...state, gebruikers, loading: false})),
);

export function gebruikersReducer(state: GebruikerState | undefined, action: Action) {
  return reducers(state, action);
}
