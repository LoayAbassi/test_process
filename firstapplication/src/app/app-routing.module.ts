import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './acceuil/first.component'; // Correction du chemin
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MissionComponent } from './mission/mission.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },   
  { path:'formulaire', component:FormulaireComponent} ,
  {path:'mission',component:MissionComponent},
  {path:'admin',component:AdminComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

