import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrangeHeadingComponent } from './orange-heading.component';


const routes: Routes = [
    {
        path: '',
        component: OrangeHeadingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrangeHeadingRoutingModule { }