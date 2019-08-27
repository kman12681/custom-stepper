import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'mat-stepper', redirectTo: 'mat-stepper', pathMatch: 'full' },
  { path: '', redirectTo: 'mat-stepper', pathMatch: 'full' },
  {
    path: 'mat-stepper',
    loadChildren: './mat-stepper/mat-stepper.module#MyMatStepperModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
