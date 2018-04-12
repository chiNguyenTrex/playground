import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './models/hero';
import { HEROES } from './mock-data/heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes Fetched')
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Hero ID = ${id} Fetched`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
