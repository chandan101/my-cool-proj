import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  message: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  };
  
  receiveMessage($event) {
    this.message = $event
    console.log('Message', this.message);
  };


}