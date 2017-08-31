import { Pet } from '../pets/shared/pet.model';

export interface Owner {
  name: string;
  gender: string;
  age: number;
  pets: Array<Pet>;
}
