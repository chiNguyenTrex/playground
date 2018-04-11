import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './models/hero';
import { HEROES } from './mock-data/heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
