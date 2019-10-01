import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Pokemon } from '../pokemons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	private pokemons: Pokemon[];

	constructor(private _api: ApiService) {}
	ngOnInit() {
		this._api.getPokemonNames().subscribe((pokemons: Pokemon[]) => {
			this.pokemons = pokemons;
			console.log(this.pokemons);
		});
	}
}
