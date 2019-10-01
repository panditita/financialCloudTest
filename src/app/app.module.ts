import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
	providers: [ ApiService ],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
