import { Component} from '@angular/core'

@Component({
    selector:"home-tag",
    templateUrl:"../views/home.component.html"
})

export class HomeComponent{
    public title:string;
    public slogan:string;
    
    constructor(){
        this.title ='Home';
        this.slogan = 'Welcome to BMC Applications'
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       console.log('Hi from Home Component')
        
    }
    
}