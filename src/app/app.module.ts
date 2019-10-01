import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './pokedex.service';
import { ApiService } from './api.service';

const appRoutes: Routes = [ { path: ' ', component: HomeComponent }, { path: 'about', component: AboutComponent } ];

@NgModule({
	declarations: [ AppComponent, HomeComponent, AboutComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
		HttpClientModule
	],
	providers: [{
		provide: 'api',
		useClass: ApiService
	}, {
		provide: 'pokedex',
		useClass: PokedexService
	}   ],

	bootstrap: [ AppComponent ]
})
export class AppModule {
}
