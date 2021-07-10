import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrangeHeadingComponent } from './DifferentFolder/orange-heading/orange-heading.component';
import { OrangeHeadingModule } from './DifferentFolder/orange-heading/orange-heading.module';
import { TopNavigationComponent } from './top-navigation/top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
      AppRoutingModule      
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
