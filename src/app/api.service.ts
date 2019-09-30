import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private api: HttpClient) {}

	getPokemons() {
		return this.api.get('https://pokeapi.co/api/v2/pokemon');
	}
}
