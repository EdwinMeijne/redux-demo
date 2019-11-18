import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gebruiker, GebruikerStatus } from './gebruiker.types';

@Injectable({providedIn: 'root'})
export class GebruikerService {
  loadGebruikers(): Observable<Gebruiker[]> {
    // MOCK data
    return of([
      {
        id: 1,
        name: 'Test Gebruiker',
        email: 'TEst@test.com',
        status: GebruikerStatus.active,
      },
    ] as Gebruiker[]);
  }
}
