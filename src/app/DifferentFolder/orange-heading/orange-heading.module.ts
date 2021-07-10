import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrangeHeadingComponent } from './orange-heading.component';
import { OrangeHeadingRoutingModule } from './orange-heading-routing.module';



@NgModule({
    declarations: [OrangeHeadingComponent],
  imports: [
      CommonModule,
      OrangeHeadingRoutingModule
  ]
})
export class OrangeHeadingModule { }
