import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GebruikerState } from './state/gebruiker.state';
import { loadGebruikersStart } from './state/gebruiker.actions';
import { AppState, selectGebruikers } from './state/gebruiker.selectors';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {
  gebruikers$ = this.store.pipe(select(selectGebruikers));

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadGebruikersStart());
  }

}
