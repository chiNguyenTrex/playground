import { InMeroryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMeroryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: "Spiderman"},
      { id: 12, name: "Batman"},
      { id: 13, name: "Superman"},
      { id: 14, name: "Antman"},
      { id: 15, name: "Birdman"},
      { id: 16, name: "Dragonman"},
      { id: 17, name: "Tigerman"},
      { id: 18, name: "Octopusman"},
      { id: 19, name: "Snakeman"},
      { id: 20, name: "Fishman"}
    ];
    return {heroes}
  }
}
