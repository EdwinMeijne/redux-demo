import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GebruikerService } from './gebruiker.service';
import { loadGebruikersStart, loadGebruikersSuccess } from './gebruiker.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class GebruikerEffects {
  constructor(
    private actions$: Actions,
    private gebruikerService: GebruikerService,
  ) {}

  loadGebruikers$ = createEffect(() => this.actions$.pipe(
    ofType(loadGebruikersStart),
    switchMap(() => this.gebruikerService.loadGebruikers()),
    map((gebruikers) => loadGebruikersSuccess({gebruikers})),
  ));
}
