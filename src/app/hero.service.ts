import { Injectable }                         from '@angular/core';
import { Observable }                         from 'rxjs/Observable';
import { of }                                 from 'rxjs/observable/of';
import { HttpClient, HttpHeaders }            from '@angular/common/http';

import { Hero }                               from './models/hero';
import { HEROES }                             from './mock-data/heroes';
import { MessageService }                     from './message.service';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // url to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes Fetched');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Hero ID = ${id} Fetched`);
    //return of(HEROES.find(hero => hero.id === id));
    return this.http.get<Hero>('api/heroes/' + id);
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
