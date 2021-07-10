import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation.component';
import { TopNavigationRoutingModule } from './top-navigation-routing';



@NgModule({
    declarations: [TopNavigationComponent],
  imports: [
      CommonModule,
      TopNavigationRoutingModule
  ]
})
export class TopNavigationModule { }
