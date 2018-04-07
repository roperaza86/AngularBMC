import { Component} from '@angular/core'
//model
import { Product } from '../models/product'


@Component({
    selector:"products-tag",
    templateUrl:"../views/products.component.html"
})

export class ProductsComponent{
    public title:string;
    public products:Array<Product>;
   
    
    constructor(){
        this.title ='List of Products';
        this.products = [
                         new Product(1,"4 1/2 x 32","Habano","Picadura",6,"01/01/2015","BPQ-000-000"),
                         new Product(2,"5 x 36","Conecticut","tripa",515,"17/08/2017","BPQ-123-000")             
                        ]
       
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       console.log('Hi from Products Component')
       console.log(this.products);
        
    }
    
}
