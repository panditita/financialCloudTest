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
		this._api.getPokemons().subscribe((data: Pokemon[]) => {
			this.pokemons = data;
			this.pokemons.forEach(pokemon=>{
				this._api.getPokemonData(pokemon.url).subscribe(data=>{
					pokemon.id =data.id;
					pokemon.imageUrl = data.sprites.front_default;
				})
			})
		});
	}
}
