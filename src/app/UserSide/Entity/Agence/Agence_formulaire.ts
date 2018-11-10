import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agence-formulaire',
  templateUrl: 'Agence_formulaire.component.html',
  styleUrls: ['Agence_formulaire.component.css']
})
export class LocationComponent {
  @Input() voiture: any[];

}
