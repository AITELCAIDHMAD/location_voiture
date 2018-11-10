import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  list_Voiture=[];
  i:number;
  id:any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.i=0;



    this.list_Voiture=[

      {
        "id_voiture": 1,
        "marque_voiture": "BMW",
        "couleur_voiture": "couleur_voiture",
        "date_sortie_voiture": "2012",
        "nombre_portes_voiture": 1,
        "nombre_coussin_voiture": 2,
        "nombre_personne_voiture": 3,
        "nombre_kilometre_voiture": 4.4,
        "nombre_kilometre_limte": 5.5,
        "clim_dans_voiture": 1,
        "type_carbirant_voiture": "gasoil",
        "type_voiture": "type_voiture",
        "boite_vitesse_voiture": "boite_vitesse",
        "reservoire_voiture": "plein",
        "bagage_voiture": "bagage_voiture",
        "prix_location_voiture": 400,
        "image_voiture": "../assets/images/voiture2.jpg",
        "commentaire_voiture": "commentaire_voiture"
      },
      {
        "id_voiture": 2,
        "marque_voiture": "4*4",
        "couleur_voiture": "couleur_voiture",
        "date_sortie_voiture": "2012",
        "nombre_portes_voiture": 1,
        "nombre_coussin_voiture": 2,
        "nombre_personne_voiture": 3,
        "nombre_kilometre_voiture": 4.4,
        "nombre_kilometre_limte": 5.5,
        "clim_dans_voiture": 1,
        "type_carbirant_voiture": "gasoil",
        "type_voiture": "type_voiture",
        "boite_vitesse_voiture": "boite_vitesse",
        "reservoire_voiture": "plein",
        "bagage_voiture": "bagage_voiture",
        "prix_location_voiture": 400,
        "image_voiture": "../assets/images/voiture2.jpg",
        "commentaire_voiture": "commentaire_voiture"
      },
      {
        "id_voiture": 3,
        "marque_voiture": "Range Rover",
        "couleur_voiture": "couleur_voiture",
        "date_sortie_voiture": "2012",
        "nombre_portes_voiture": 1,
        "nombre_coussin_voiture": 2,
        "nombre_personne_voiture": 3,
        "nombre_kilometre_voiture": 4.4,
        "nombre_kilometre_limte": 5.5,
        "clim_dans_voiture": 1,
        "type_carbirant_voiture": "gasoil",
        "type_voiture": "type_voiture",
        "boite_vitesse_voiture": "boite_vitesse",
        "reservoire_voiture": "plein",
        "bagage_voiture": "bagage_voiture",
        "prix_location_voiture": 400,
        "image_voiture": "../assets/images/voiture3.jpg",
        "commentaire_voiture": "commentaire_voiture"
      },
      {
        "id_voiture": 1,
        "marque_voiture": "BMW",
        "couleur_voiture": "couleur_voiture",
        "date_sortie_voiture": "2012",
        "nombre_portes_voiture": 1,
        "nombre_coussin_voiture": 2,
        "nombre_personne_voiture": 3,
        "nombre_kilometre_voiture": 4.4,
        "nombre_kilometre_limte": 5.5,
        "clim_dans_voiture": 1,
        "type_carbirant_voiture": "gasoil",
        "type_voiture": "type_voiture",
        "boite_vitesse_voiture": "boite_vitesse",
        "reservoire_voiture": "plein",
        "bagage_voiture": "bagage_voiture",
        "prix_location_voiture": 400,
        "image_voiture": "../assets/images/voiture2.jpg",
        "commentaire_voiture": "commentaire_voiture"
      },
      {
        "id_voiture": 2,
        "marque_voiture": "4*4",
        "couleur_voiture": "couleur_voiture",
        "date_sortie_voiture": "2012",
        "nombre_portes_voiture": 1,
        "nombre_coussin_voiture": 2,
        "nombre_personne_voiture": 3,
        "nombre_kilometre_voiture": 4.4,
        "nombre_kilometre_limte": 5.5,
        "clim_dans_voiture": 1,
        "type_carbirant_voiture": "gasoil",
        "type_voiture": "type_voiture",
        "boite_vitesse_voiture": "boite_vitesse",
        "reservoire_voiture": "plein",
        "bagage_voiture": "bagage_voiture",
        "prix_location_voiture": 400,
        "image_voiture": "../assets/images/voiture2.jpg",
        "commentaire_voiture": "commentaire_voiture"
      },
      {
        "id_voiture": 3,
        "marque_voiture": "Range Rover",
        "couleur_voiture": "couleur_voiture",
        "date_sortie_voiture": "2012",
        "nombre_portes_voiture": 1,
        "nombre_coussin_voiture": 2,
        "nombre_personne_voiture": 3,
        "nombre_kilometre_voiture": 4.4,
        "nombre_kilometre_limte": 5.5,
        "clim_dans_voiture": 1,
        "type_carbirant_voiture": "gasoil",
        "type_voiture": "type_voiture",
        "boite_vitesse_voiture": "boite_vitesse",
        "reservoire_voiture": "plein",
        "bagage_voiture": "bagage_voiture",
        "prix_location_voiture": 400,
        "image_voiture": "../assets/images/voiture3.jpg",
        "commentaire_voiture": "commentaire_voiture"
      }
    ];

  }

}
