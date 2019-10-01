import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'financialCloudTest';

  onShow(id, name) {
		this.pokedex.displayPokemons(id, name);
	}
  constructor(@Inject('pokedex') private pokedex) {}
  
}
