import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { forkJoin } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService,private http: HttpClient,) { }

  getHeroes(): Observable<Hero[]> {
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  }

  requestDataFromMultipleSources() : Observable<any[]>{
    let response1 = this.http.get("https://httpbin.org/get?Id=1&name=chandan&city=gurgaon");
    let response2 = this.http.get("https://httpbin.org/get");
    let response3 = this.http.get("https://httpbin.org/get");
    return forkJoin([response1, response2, response3]);
  }

  getHero(id: number): Observable<Hero> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }


  resolveAfter4Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 8000);
    });
  }

  get(){
    return this.http.get("https://httpbin.org/get?Id=1&name=chandan&city=gurgaon");
  }

}