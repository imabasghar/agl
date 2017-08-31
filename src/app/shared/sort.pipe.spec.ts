import { SortByPipe } from './sort.pipe';
describe('SortByPipe', () => {
  let sortByPipe: SortByPipe;
  beforeEach(() => {
    sortByPipe = new SortByPipe();
  });

  it('should sort data', () => {
    const mockData = [
      { name: 'Peter', age: 30 },
      { name: 'John', age: 20 },
      { name: 'Snow', age: 55 },
      { name: 'Kimberly', age: 50 }
    ];

    const dataSortedOnName = sortByPipe.transform(mockData, 'name');
    expect(dataSortedOnName[0].name).toBe('John');
    expect(dataSortedOnName[1].name).toBe('Kimberly');
    expect(dataSortedOnName[2].name).toBe('Peter');
    expect(dataSortedOnName[3].name).toBe('Snow');

    const dataSortedOnAge = sortByPipe.transform(mockData, 'age');
    expect(dataSortedOnAge[0].age).toBe(20);
    expect(dataSortedOnAge[1].age).toBe(30);
    expect(dataSortedOnAge[2].age).toBe(50);
    expect(dataSortedOnAge[3].age).toBe(55);

  });
});
