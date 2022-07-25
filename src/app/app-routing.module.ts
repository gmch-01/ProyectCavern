import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './Shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'paginas', loadChildren: () => import('./paginas/paginas.module').then(m => m.PaginasModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
