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
	public pokemons: Pokemon[];
	public newPokemons: Pokemon[];
	public filteredPokemons: Pokemon[];
	private allAbilities: string[] = [];

	isLoading: boolean = false;

	error: boolean = false;

	constructor(private _api: ApiService) {}
	ngOnInit() {
		this.pokemons = [];
		this.newPokemons = [];
		this.filteredPokemons = [];
		this.allAbilities = [];
		this.fetchNextSetOfPokemons();
	}

	disableLoading() {
		if (this.pokemons.length > 964 && this.pokemons.length === this.newPokemons.length) {
			return console.log('Finished loading');
		}
	}

	getAbilities(abilitiesArray: any[]): string[] {
		let abilities: string[] = [];
		if (abilitiesArray.length > 0) {
			abilitiesArray.forEach((ability) => {
				abilities.push(ability.ability.name);
			});
		}
		return abilities;
	}

	fetchNextSetOfPokemons() {
		{
			this.isLoading = true;
			this._api.getPokemons(this.pokemons.length, 30).subscribe((data: Pokemon[]) => {
				this.newPokemons = data;
				this.newPokemons.forEach((pokemon) => {
					this._api.getPokemonData(pokemon.url).subscribe((data) => {
						pokemon.id = data.id;
						pokemon.imageUrl = data.sprites.front_default;
						pokemon.abilities = this.getAbilities(data.abilities);
						console.log('inside new pokemons ' + pokemon.abilities);
					});
				});

				this.pokemons = this.pokemons.concat(this.newPokemons);
				console.log('inside get pokemons ' + this.pokemons.name[0]);

				this.filteredPokemons = this.pokemons;
				this.allAbilities = this.pokemons.abilities;

				this.isLoading = false;
				this.error = false;
			});
			catchError((err) => err.mesage);
		}
		console.log('are you there? ' + this.allAbilities[0] + '!!');
	}

	onNameEnter(value: string) {
		this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name.startsWith(value));

		//	;
	}

	pickAbilities(value: any) {
		this.allAbilities = this.pokemons.filter((pokemon) => pokemon.abilities.indexOf(value) > -1);
	}
}
