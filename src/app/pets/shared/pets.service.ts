import { Pet } from './pet.model';
import { Map } from 'rxjs/util/Map';
import { Owner } from './../../shared/owner.model';
import { OwnersService } from './../../shared/owners.service';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class PetsService {
  constructor(private ownerService: OwnersService) {
  }

  getPets() {
    return this.ownerService.getOwners()
      .map(this.groupOwnersByGender)
      .map(this.groupPetsByOwnersGender);
  }

  /**
   * Group by using gender
   */
  public groupOwnersByGender(owners: Array<Owner>) {
    return _.groupBy(owners, owner => owner.gender);
  }

  /**
   * Group pets by owner's gender
   * @param groupedOwners
   */
  public groupPetsByOwnersGender (groupedOwners: _.Dictionary<Array<Owner>>): _.Dictionary<Array<Pet>> {
    const groupedPets: _.Dictionary<Array<Pet>> = {};
    _.forOwn(groupedOwners, (owners, key) => {
     const pets = owners.reduce((petArray, owner) => {
       if (!owner.pets) {
         return petArray;
       }

      return petArray.concat(owner.pets);
     }, []);
     groupedPets[key] = pets;
    });
    return groupedPets;
  }
}
