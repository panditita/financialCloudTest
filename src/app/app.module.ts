import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { PokedexService } from './pokedex.service';
import { ApiService } from './api.service';

const appRoutes: Routes = [ { path: ' ', component: HomeComponent } ];

@NgModule({
	declarations: [ AppComponent, HomeComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
		HttpClientModule
	],
	providers: [ PokedexService, ApiService ],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
