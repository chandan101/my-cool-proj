import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];

	selectedHero: Hero;

	asyncResult: any;

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();

		this.heroService.requestDataFromMultipleSources().subscribe(responseList => {
 			console.log('responseList', responseList);
        });

        /*
	    this.heroService.resolveAfter2Seconds(20).then(value => {
	      console.log(`promise result: ${value}`);
	    });
	    console.log('I will not wait until promise is resolved');
	    */
	    console.log('getValueWithAsync', this.getValueWithAsync());
	};

	async getValueWithAsync() {
    	const value = await Promise.all([this.heroService.resolveAfter2Seconds(20), this.heroService.resolveAfter2Seconds(80)]);//await this.heroService.resolveAfter2Seconds(20);
    	console.log(`async result: ${value}`);

    	this.asyncResult = await Promise.all([this.heroService.get().toPromise(), this.heroService.get().toPromise()]);
    	console.log('No issues, I will wait until promise is resolved..', this.asyncResult);

  	};


	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

	getHeroes(): void {
	  this.heroService.getHeroes()
	      .subscribe(heroes => this.heroes = heroes);
	}

}
