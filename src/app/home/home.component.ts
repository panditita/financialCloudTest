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
	private pokemons: Pokemon[];
	private newPokemons: Pokemon[];
	private filteredPokemons: Pokemon[];
	private allAbilities: string[];
	abilityFilter: string = '';

	isLoading: boolean = false;

	error: boolean = false;

	constructor(private _api: ApiService) {}
	ngOnInit() {
		this.pokemons = [];
		this.newPokemons = [];
		this.filteredPokemons = [];
		this.allAbilities = [ '' ];
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
			this._api.getPokemons(this.pokemons.length, 28).subscribe((data: Pokemon[]) => {
				this.newPokemons = data;
				this.newPokemons.forEach((pokemon) => {
					this._api.getPokemonData(pokemon.url).subscribe((data) => {
						pokemon.id = data.id;
						pokemon.imageUrl = data.sprites.front_default;
						pokemon.abilities = this.getAbilities(data.abilities);
						pokemon.abilities.forEach((ability) => {
							if (this.allAbilities.indexOf(ability) === -1) {
								this.allAbilities.push(ability);
							}
						});
					});
				});
				this.pokemons = this.pokemons.concat(this.newPokemons);
				this.filteredPokemons = this.pokemons;

				this.isLoading = false;
				this.error = false;
			});
			catchError((err) => err.mesage);
		}
	}

	onNameEnter(value: string) {
		this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name.startsWith(value));
	}

	filterByAbility() {
		console.log('hey filter ' + this.abilityFilter);
		if (this.abilityFilter != '') {
			this.filteredPokemons = this.pokemons.filter(
				(pokemon) => pokemon.abilities.indexOf(this.abilityFilter) > -1
			);
		} else {
			this.filteredPokemons = this.pokemons;
		}
	}
}
