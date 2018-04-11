import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './mock-data/heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
