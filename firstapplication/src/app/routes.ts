import { Routes } from '@angular/router';
import { FirstComponent } from './acceuil/first.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MissionComponent } from './mission/mission.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';

// Définition des routes
export const routes: Routes = [
  { path: 'first', component: FirstComponent }, 
   { path:'formulaire', component:FormulaireComponent},  
    {path:'mission',component:MissionComponent},
    {path:'admin',component:AdminComponent},  
    {path:'test',component:TestComponent} 
];
