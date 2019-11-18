import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GebruikersComponent } from './gebruikers/gebruikers.component';

const routes: Routes = [
  {
    path: 'gebruikers',
    component: GebruikersComponent,
  },
  {
    path: '',
    redirectTo: '/gebruikers',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
