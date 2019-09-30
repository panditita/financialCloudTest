import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	pokemons: Object;

	constructor(private _api: ApiService) {}

	ngOnInit() {
		this._api.getPokemons().subscribe((data) => {
			this.pokemons = data;
			console.log(this.pokemons);
		});
	}
}
