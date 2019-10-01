import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons = [
    { id: Number, name : String}
]

//  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  
	constructor(private _api: ApiService) {}
  
  displayPokemons(id, name) {
		this.pokemons = this.pokemons.map((pokemon) => (pokemon.id === id ? { id, name } : pokemon));
	}

}
