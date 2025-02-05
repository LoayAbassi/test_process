import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './acceuil/first.component';
import { FormulaireComponent } from './formulaire/formulaire.component'; // Correction du chemin
import { routes } from './routes';
import { MissionComponent } from './mission/mission.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FormulaireComponent,
    MissionComponent,
    AdminComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Configuration du RouterModule avec les routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



