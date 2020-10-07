import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Rutas: localhost:4200/

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
