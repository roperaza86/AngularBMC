import { ModuleWithProviders, ModuleWithComponentFactories } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';


//Components
import { HomeComponent } from './components/home.component';
import { NotFoundPageComponent } from './components/notfoundpage.component';
import { ProductsComponent } from './components/products.component';



const appRoutes:Routes=[
                {path:'',component:HomeComponent},
                {path:'home',component:HomeComponent},
                {path:'products',component:ProductsComponent},
                {path:'**',component:NotFoundPageComponent}
                ]

export const appRoutingProviders : any []=[];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);


