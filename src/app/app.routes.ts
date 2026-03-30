import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'yo',
    loadComponent: () => import('./yo/yo').then(m => m.Yo)
  },
  {
    path: 'infancia',
    loadComponent: () => import('./infancia/infancia').then(m => m.Infancia)
  },
  {
    path: 'hobbies',
    loadComponent: () => import('./hobbies/hobbies').then(m => m.Hobbies)
  },
  {
    path: 'carrera',
    loadComponent: () => import('./carrera/carrera').then(m => m.Carrera)
  },
  {
    path: 'personalidad',
    loadComponent: () => import('./personalidad/personalidad').then(m => m.Personalidad)
  },
  { path: '', redirectTo: 'yo', pathMatch: 'full' }
];