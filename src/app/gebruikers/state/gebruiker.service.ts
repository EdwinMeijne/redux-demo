import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Gebruiker } from './gebruiker.types';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GebruikerService {
  constructor(private http: HttpClient) {}
  loadGebruikers(): Observable<Gebruiker[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users') as Observable<Gebruiker[]>;
  }
}
