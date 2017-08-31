import { Pet } from './../shared/pet.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOnType'
})
export class FilterOnTypePipe implements PipeTransform {
  transform(pets: Array<Pet>, type: string) {
    return pets.filter(pet => pet.type === type);
  }
}
