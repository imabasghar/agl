import { ownersMock } from './owners.mock';
import { Owner } from '../../shared/owner.model';
import { OwnersService } from '../../shared/owners.service';
import { PetsService } from './pets.service';

describe('PetsService', () => {
  let petsService: PetsService;
  beforeEach(() => {
    petsService = new PetsService({} as OwnersService);
  });

  it('groupOwnersByGender should have all males under Male key', () => {
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Male.length)
      .toBe(3);
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Male[0].name)
      .toBe('Bob');
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Male[1].name)
      .toBe('Steve');
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Male[2].name)
      .toBe('Fred');
  });

  it('groupOwnersByGender should have all female under Female key', () => {
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Female.length)
    .toBe(3);
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Female[0].name)
    .toBe('Jennifer');
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Female[1].name)
    .toBe('Samantha');
    expect(petsService.groupOwnersByGender(ownersMock as Array<Owner>).Female[2].name)
    .toBe('Alice');
  });

  it('groupPetsByOwnersGender should concat all pets for all owners in a key', () => {
    const groupedOwners = petsService.groupOwnersByGender(ownersMock as Array<Owner>);
    const groupedPets = petsService.groupPetsByOwnersGender(groupedOwners);

    // Male Owner's Pets Assertions
    expect(groupedPets.Male.length).toBe(6);
    expect(groupedPets.Male[0].name).toBe('Garfield');
    expect(groupedPets.Male[0].type).toBe('Cat');
    expect(groupedPets.Male[1].name).toBe('Fido');
    expect(groupedPets.Male[1].type).toBe('Dog');

    // Female Owner's Pets Assertions
    expect(groupedPets.Female.length).toBe(4);
    expect(groupedPets.Female[0].name).toBe('Garfield');
    expect(groupedPets.Female[0].type).toBe('Cat');
    expect(groupedPets.Female[1].name).toBe('Tabby');
    expect(groupedPets.Female[1].type).toBe('Cat');
  });
});
