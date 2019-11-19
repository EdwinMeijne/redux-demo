import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikersComponent } from './gebruikers.component';
import { StoreModule } from '@ngrx/store';
import { gebruikersReducer } from './state/gebruiker.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GebruikerEffects } from './state/gebruiker.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GebruikersComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('gebruikers', gebruikersReducer),
    EffectsModule.forFeature([GebruikerEffects]),
  ],
  exports: [
    GebruikersComponent
  ]
})
export class GebruikerModule { }
