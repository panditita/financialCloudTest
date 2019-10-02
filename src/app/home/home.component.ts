import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { Pokemon } from '../pokemons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	pokemons: Pokemon[];

	isLoading: boolean = false;

	error: boolean = false;

	constructor(private _api: ApiService) {}
	ngOnInit() {
		this.loadMore();
	}

	loadMore() {
		{
			this.isLoading = true;
			console.log('WTF 2 ' + this.pokemons);

			this._api.getPokemons(this.pokemons.length, 50).subscribe((data: Pokemon[]) => {
				this.pokemons = data;
				console.log('WTF 3' + this.pokemons);
				this.pokemons.forEach((pokemon) => {
					this._api.getPokemonData(pokemon.url).subscribe((data) => {
						pokemon.id = data.id;
						pokemon.imageUrl = data.sprites.front_default;
					});
					this.pokemons = this.pokemons.concat(pokemon);
					this.isLoading = false;
					this.error = false;
				});
			});
		}
	}
}
