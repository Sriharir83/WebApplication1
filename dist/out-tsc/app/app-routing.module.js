import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [{
        path: 'topnavigation',
        loadChildren: () => import('./top-navigation/top-navigation/top-navigation.module').then(m => m.TopNavigationModule)
    },
    {
        path: 'orangeheading',
        loadChildren: () => import('./DifferentFolder/orange-heading/orange-heading.module').then(m => m.OrangeHeadingModule)
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map