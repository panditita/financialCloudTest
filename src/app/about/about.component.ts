import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
	pokemons: Object;

	constructor(private _api: ApiService) {}

	ngOnInit() {
		this._api.getPokemons().subscribe((data) => {
			this.pokemons = data;
			console.log(this.pokemons);
		});
	}
}
