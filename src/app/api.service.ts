import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
	//imageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

	constructor(private api: HttpClient) {}

	getPokemonNames() {
		return this.api.get(this.baseUrl);
	}
}
