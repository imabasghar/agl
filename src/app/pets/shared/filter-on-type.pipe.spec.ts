import { Pet } from '../shared/pet.model';
import { FilterOnTypePipe } from './filter-on-type.pipe';

describe('FilterOnTypePipe', () => {
  let filterOnTypePipe: FilterOnTypePipe;
  const mockData = [
    {name: 'Garfield', type: 'Cat'},
    {name: 'Nemo', type: 'Fish'},
    {name: 'Fido', type: 'Dog'},
    {name: 'Tom', type: 'Cat'},
    {name: 'Max', type: 'Dog'}
  ];
  beforeEach(() => {
    filterOnTypePipe = new FilterOnTypePipe();
  });

  it('should filter pets of type Cat', () => {
    const cats = filterOnTypePipe.transform(mockData as Pet[], 'Cat');
    expect(cats[0].name).toBe('Garfield');
    expect(cats[1].name).toBe('Tom');
  });

  it('should filter pets of type Dog', () => {
    const dogs = filterOnTypePipe.transform(mockData as Pet[], 'Dog');
    expect(dogs[0].name).toBe('Fido');
    expect(dogs[1].name).toBe('Max');
  });

  it('should filter pets of type Fish', () => {
    const fishes = filterOnTypePipe.transform(mockData as Pet[], 'Fish');
    expect(fishes[0].name).toBe('Nemo');
  });
});
