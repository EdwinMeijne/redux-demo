import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GebruikerState } from './gebruiker.state';

export interface AppState {
  gebruikers: GebruikerState;
}

const selectFeature = createFeatureSelector<AppState, GebruikerState>('gebruikers');

export const selectGebruikersData = createSelector(
  selectFeature,
    state => ({
      gebruikers: state.gebruikers,
      loading: state.loading,
    }),
);
