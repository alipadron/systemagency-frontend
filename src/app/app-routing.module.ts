import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'work', component: WorkComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
