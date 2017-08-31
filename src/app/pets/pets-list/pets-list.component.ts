import { PetsService } from './../shared/pets.service';
import { Pet } from '../shared/pet.model';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {
  groupedPets: _.Dictionary<Array<Pet>> = {};
  constructor(private petsService: PetsService) {

  }

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.petsService.getPets().subscribe(data => {
      this.groupedPets = data;
    })
  }
}
