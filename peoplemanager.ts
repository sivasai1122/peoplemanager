// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

export const routes: Routes = [
  { path: '', component: ListPeopleComponent },
  { path: 'edit/:id', component: EditPersonComponent },
];
