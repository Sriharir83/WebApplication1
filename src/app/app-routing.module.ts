import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'topnavigation',
    loadChildren: () => import('./top-navigation/top-navigation/top-navigation.module').then(m => m.TopNavigationModule)
},
    {
        path: 'orangeheading',
        loadChildren: () => import('./DifferentFolder/orange-heading/orange-heading.module').then(m => m.OrangeHeadingModule)
    }];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
