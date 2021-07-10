import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopNavigationComponent } from './top-navigation.component';


const routes: Routes = [
    {
        path: '',
        component: TopNavigationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TopNavigationRoutingModule { }