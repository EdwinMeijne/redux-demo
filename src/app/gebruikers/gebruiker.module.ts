import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikersComponent } from './gebruikers.component';
import { StoreModule } from '@ngrx/store';
import { gebruikersReducer } from './state/gebruiker.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GebruikerEffects } from './state/gebruiker.effects';



@NgModule({
  declarations: [
    GebruikersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('gebruikers', gebruikersReducer),
    EffectsModule.forFeature([GebruikerEffects]),
  ]
})
export class GebruikerModule { }
