import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas

import {routing , appRoutingProviders } from './app.routing'

//Components
import { HomeComponent } from './components/home.component';
import { NotFoundPageComponent } from './components/notfoundpage.component';
import { ProductsComponent } from './components/products.component';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
