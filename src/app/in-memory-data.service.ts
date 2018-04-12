import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: "Spider Man"},
      { id: 12, name: "Bat Man"},
      { id: 13, name: "Super Man"},
      { id: 14, name: "Ant Man"},
      { id: 15, name: "Bird Man"},
      { id: 16, name: "Dragon Man"},
      { id: 17, name: "Tiger Man"},
      { id: 18, name: "Octopus Man"},
      { id: 19, name: "Snake Man"},
      { id: 20, name: "Fish Man"}
    ];
    return {heroes};
  }
}
