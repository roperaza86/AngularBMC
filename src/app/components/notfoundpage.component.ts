import { Component} from '@angular/core'

@Component({
    selector:"notfoundpage-tag",
    templateUrl:"../views/notfoundpage.component.html"
})

export class NotFoundPageComponent{
    public title:string;
    
    constructor(){
        this.title ='Error!!..this page is not found!!';
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       console.log('Hi from  NotFoundPage Component')
        
    }
    
}