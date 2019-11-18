import { Gebruiker } from './gebruiker.types';

export const initialState: GebruikerState = {
  gebruikers: [],
  loading: false,
};

export interface GebruikerState {
  gebruikers: Gebruiker[];
  loading: boolean;
}
