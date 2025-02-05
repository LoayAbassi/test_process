import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  // Modèle de données pour le formulaire
  formulaireData = {
    id_candidat: null,
    date_naissance: '',
    niv_etude: '',
    genre: '',
    mot_pass: '',
    societe_actuelle: '',
    poste_actuel: '',
    societe_souhaite: '',
    poste_souhaite: '',
    score_reponse: null
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Logique d'initialisation si nécessaire
  }

  // Fonction de soumission du formulaire
  onSubmit(): void {
    console.log('Formulaire soumis:', this.formulaireData);
    
    // Redirection vers la page "Test" après soumission du formulaire
    this.router.navigate(['/test']);
  }
}

