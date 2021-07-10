import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = "AppComponent";
    test = "testing";
    constructor(private router: Router) {
    }    
    
    @Input() customtitle:any; // decorate the property with @Input()

    ngOnInit() {
        console.log(this.customtitle);

        this.router.navigate(['/topnavigation']);
    }

    ngAfterInit() {

    }
}
