import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

	constructor(private api: HttpClient) {}

	getPokemons(offset: number, limit: number) {
		return this.api.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`).pipe(map((data: any) => data.results));
	}

	getPokemonData(pokemonUrl: string) {
		return this.api.get(pokemonUrl);
	}
}
