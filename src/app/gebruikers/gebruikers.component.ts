import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadGebruikersStart } from './state/gebruiker.actions';
import { AppState, selectGebruikersData } from './state/gebruiker.selectors';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {
  gebruikersData$ = this.store.pipe(select(selectGebruikersData));

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadGebruikersStart());
  }

}
